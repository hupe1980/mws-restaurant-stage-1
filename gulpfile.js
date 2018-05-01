'use strict';

const gulp = require('gulp');
const responsive = require('gulp-responsive');
const postcss = require('gulp-postcss');
const clean = require('gulp-clean');
const browserSync = require('browser-sync');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const workbox = require('workbox-build');

const dist = 'dist';
const isDev = true;

const sw = () => {
  return workbox
    .generateSW({
      globDirectory: dist,
      globPatterns: ['**/*.{html,js,jpg,css}'],
      swDest: `${dist}/sw.js`,
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: new RegExp('/restaurant.html'),
          handler: 'staleWhileRevalidate',
        },
        {
          urlPattern: new RegExp('/data/restaurants.json'),
          handler: 'staleWhileRevalidate',
        },
        {
          urlPattern: new RegExp('https://maps.googleapis.com'),
          handler: 'staleWhileRevalidate',
        },
        {
          urlPattern: new RegExp('https://maps.gstatic.com/mapfiles'),
          handler: 'staleWhileRevalidate',
        },
        {
          urlPattern: new RegExp(
            '^https://fonts.(?:googleapis|gstatic).com/(.*)',
          ),
          handler: 'networkFirst',
        },
      ],
    })
    .then(({ warnings }) => {
      // In case there are any warnings from workbox-build, log them.
      for (const warning of warnings) {
        console.warn(warning);
      }
      console.info('Service worker generation completed.');
    })
    .catch(error => {
      console.warn('Service worker generation failed:', error);
    });
};

// watch files for changes and reload
const serve = () => {
  browserSync({
    server: {
      baseDir: 'dist',
    },
  });

  gulp.watch('src/**/*.html', html);
  gulp.watch('src/**/*.js', js);
  gulp.watch('src/**/*.css', css);

  gulp.watch(
    ['*.html', 'css/**/*.css', 'js/**/*.js'],
    { cwd: 'dist' },
    browserSync.reload,
  );
};

// Delete the dist directory
const cleanDist = () => gulp.src(dist).pipe(clean());

const data = () => gulp.src('src/**/*.json').pipe(gulp.dest(dist));

const html = () => gulp.src('src/**/*.html').pipe(gulp.dest(dist));

const js = () => gulp.src('src/**/*.js').pipe(gulp.dest(dist));

const css = () => {
  const plugins = [autoprefixer({ browsers: ['last 2 version'] })];

  if (!isDev) {
    plugins.push(cssnano());
  }

  return gulp
    .src('src/**/*.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest(dist));
};

const img = () => {
  return gulp
    .src('src/**/*.jpg')
    .pipe(
      responsive(
        {
          '**/*.jpg': [
            {
              width: 320,
              rename: { suffix: '-320w' },
            },
            {
              width: 480,
              rename: { suffix: '-480w' },
            },
            {
              width: 800,
              rename: { suffix: '-800w' },
            },
          ],
        },
        {
          // Global configuration for all images
          // The output quality for JPEG, WebP and TIFF output formats
          quality: 70,
          // Use progressive (interlace) scan for JPEG and PNG output
          progressive: true,
          // Strip all metadata
          withMetadata: false,
          errorOnUnusedConfig: false,
        },
      ),
    )
    .pipe(gulp.dest(dist));
};

const build = gulp.series(
  cleanDist,
  gulp.parallel(css, img, html, js, data),
  sw,
);

gulp.task('build', build);

gulp.task('default', gulp.series(build, serve));
