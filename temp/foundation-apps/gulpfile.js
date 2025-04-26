'use strict';

// Foundation for Apps
//
// We use this Gulpfile to assemble the documentation, run unit tests,
// and deploy changes to the live documentation and CDN.

// The tasks are grouped into these categories:
//   1. Libraries

// 1. LIBRARIES
// - - - - - - - - - - - - - - -
var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    rimraf = require('rimraf'),
    runSequence = require('run-sequence'),
    modRewrite = require('connect-modrewrite'),
    routes = require('./bin/gulp-dynamic-routing'),
    merge = require('merge-stream'),
    octophant = require('octophant')
    ;

var addVersions = function () {
    var pkg = require('./package.json');
    return $.rename(function (path) {
        // Inject the version number into the filename
        var base = path.basename.split('.');
        if (base.length === 1) {
            base = base + '-' + pkg.version;
        }
        else {
            base = base.slice(0, -1).join('') + '-' + pkg.version + '.' + base[base.length - 1];
        }
        path.basename = base;
        path.dirname = '';
    });
};