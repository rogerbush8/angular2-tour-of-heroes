'use strict';

module.exports = function (grunt) {

    var srcdir='app-src';
    var dstdir='app';

    grunt.loadNpmTasks ('grunt-contrib-copy');
    grunt.loadNpmTasks ('grunt-contrib-less');
    grunt.loadNpmTasks ('grunt-contrib-watch');
    
    grunt.initConfig ({
        // TODO - checkout grunt concurrent for prod
        watch: {
            // Watch static assets (css, html) in app-src component dirs
            static: {
                files: [ srcdir + '/*/*.css', srcdir + '/*/*.html'],
                tasks: ['copy']
            },

            // Watch .less in app-src component dirs
            less: {
                files: [ srcdir + '/*/*.less'],
                tasks: ['less']
            }
        },

        // Copy static assets (css, html) from app-src component dirs
        copy : {
            main : {
                files : [
                    { expand: true, cwd: srcdir, dest: dstdir,
                      src: ['*/*.css', '*/*.html'] }
                ]
            }
        },

        less: {
            // TODO - production

            development: {
                // Expand .less from src-dir component dirs to target
                //   (incl.less are import-only resulting in no target)
                files: [{
                    expand: true,
                    cwd: srcdir,
                    src: ['*/*.less', '!*/*.incl.less'],
                    dest: dstdir,
                    ext: '.css'
                }]
            },
        },
    });

    grunt.registerTask ('default', ['watch']);
};
