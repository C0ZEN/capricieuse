// jshint ignore: start
'use strict';

module.exports = function (grunt) {

    // Required
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin',
        ngtemplates  : 'grunt-angular-templates',
        cdnify       : 'grunt-google-cdn'
    });

    // Configurable paths
    var appPaths = {
        app    : require('./bower.json').appPath,
        release: require('./bower.json').releasePath
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project paths
        paths: appPaths,

        watch: {
            targets   : {
                files: [
                    '<%= paths.app %>/config/targets/*.json'
                ],
                tasks: [
                    'preprocess'
                ]
            },
            js        : {
                files  : [
                    '<%= paths.app %>/**/*.js',
                    'Gruntfile.js'
                ],
                tasks  : [
                    'angularFileLoader'
                ],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
            styles    : {
                files: ['<%= paths.app %>/**/*.css'],
                tasks: [
                    'newer:copy:styles',
                    'postcss'
                ]
            },
            less      : {
                files: ['<%= paths.app %>/**/*.less'],
                tasks: [
                    'less:main',
                    'newer:copy:styles',
                    'postcss'
                ]
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files  : [
                    '<%= paths.app %>/**/*.html',
                    '.tmp/styles/**/*.css',
                    '<%= paths.app %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },

        connect: {
            options   : {
                port      : 9888,
                hostname  : 'localhost',
                livereload: 35788
            },
            livereload: {
                options: {
                    open      : true,
                    middleware: function (connect) {
                        return [
                            connect.static('.tmp'),
                            connect().use(
                                '/bower_components',
                                connect.static('./bower_components')
                            ),
                            connect().use(
                                '/app/styles',
                                connect.static('./app/styles')
                            ),
                            connect.static(appPaths.app)
                        ];
                    }
                }
            },
            test      : {
                options: {
                    port      : 9001,
                    middleware: function (connect) {
                        return [
                            connect.static('.tmp'),
                            connect.static('test'),
                            connect().use(
                                '/bower_components',
                                connect.static('./bower_components')
                            ),
                            connect.static(appPaths.app)
                        ];
                    }
                }
            }
        },

        clean: {
            server   : '.tmp',
            release  : {
                files: [{
                    dot: true,
                    src: [
                        '.tmp'
                    ]
                }]
            },
            languages: [
                '.tmp/languages'
            ]
        },

        postcss: {
            options: {
                processors: [
                    require('autoprefixer-core')({browsers: ['last 1 version']})
                ]
            },
            server : {
                options: {
                    map: true
                },
                files  : [{
                    expand: true,
                    cwd   : '.tmp/styles/',
                    src   : '**/*.css',
                    dest  : '.tmp/styles/'
                }]
            }
        },

        wiredep: {
            app: {
                src       : [
                    '<%= paths.app %>/index.html'
                ],
                ignorePath: /\.\.\//
            }
        },

        useminPrepare: {
            html   : '<%= paths.app %>/index.html',
            options: {
                dest: '<%= paths.dist %>',
                flow: {
                    html: {
                        steps: {
                            js : [
                                'concat',
                                'uglifyjs'
                            ],
                            css: ['cssmin:dist']
                        },
                        post : {}
                    }
                }
            }
        },

        usemin: {
            html   : ['<%= paths.dist %>/**/*.html'],
            css    : ['<%= paths.dist %>/styles/**/*.css'],
            js     : ['<%= paths.dist %>/**/*.js'],
            options: {
                assetsDirs: [
                    '<%= paths.dist %>',
                    '<%= paths.dist %>/images',
                    '<%= paths.dist %>/styles'
                ],
                patterns  : {
                    js: [[/(images\/[^''""]*\.(png|jpg|jpeg|gif|webp|svg))/g,
                        'Replacing references to images']]
                }
            }
        },

        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            release: {
                files: [
                    {'<%= paths.release %>/styles/main.min.css': '.tmp/release/main.min.css'}
                ]
            }
        },

        uglify: {
            releaseMain: {
                options: {
                    mangle: false
                },
                files  : {
                    '<%= paths.release %>/main.min.js': [
                        '<%= paths.app %>/**/*.js',
                        '.tmp/release/template.cache.js',
                        '!<%= paths.app %>/app.module.js',
                        '!<%= paths.app %>/app.config.js',
                        '!<%= paths.app %>/app.release.config.js',
                        '!<%= paths.app %>/app.run.js'
                    ]
                }
            },
            releaseApp : {
                files: {
                    '<%= paths.release %>/module.min.js': '<%= paths.app %>/app.module.js',
                    '<%= paths.release %>/config.min.js': '<%= paths.app %>/app.release.config.js',
                    '<%= paths.release %>/run.min.js'   : '<%= paths.app %>/app.run.js'
                }
            }
        },

        imagemin: {
            release: {
                files: [{
                    expand: true,
                    cwd   : '<%= paths.app %>/images',
                    src   : '**/*.{png,jpg,jpeg,gif}',
                    dest  : '<%= paths.release %>/images'
                }]
            }
        },

        htmlmin: {
            release: {
                options: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace       : true,
                    removeAttributeQuotes    : true,
                    removeComments           : true,
                    removeCommentsFromCDATA  : true
                },
                files  : [
                    {
                        expand: true,
                        cwd   : '<%= paths.app %>',
                        src   : [
                            '**/*.html',
                            '!index.html',
                            '!index.release.html'
                        ],
                        dest  : '<%= paths.release %>'
                    }
                ]
            },
            index  : {
                options: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace       : true,
                    removeAttributeQuotes    : true,
                    removeComments           : true,
                    removeCommentsFromCDATA  : true
                },
                files  : [
                    {
                        expand: true,
                        cwd   : '<%= paths.app %>',
                        src   : [
                            'index.release.html'
                        ],
                        dest  : '<%= paths.release %>',
                        rename: function (dest, src) {
                            src = src.replace('release.', '');
                            return dest + '/' + src;
                        }
                    }
                ]
            }
        },

        ngtemplates: {
            release: {
                options: {
                    module : 'capricieuseApp',
                    htmlmin: '<%= htmlmin.release.options %>'
                },
                cwd    : '<%= paths.app %>',
                src    : [
                    '**/*.html',
                    '!index.html'
                ],
                dest   : '.tmp/release/template.cache.js'
            }
        },

        copy: {
            styles   : {
                expand: true,
                cwd   : '<%= paths.app %>/styles',
                dest  : '.tmp/styles/',
                src   : '**/*.css'
            },
            languages: {
                expand: true,
                cwd   : '<%= paths.app %>/languages/concat',
                dest  : '<%= paths.release %>/languages/',
                src   : '*.json',
                rename: function (dest, src) {
                    src = src.replace('concat.', '');
                    return dest + src;
                }
            },
            other    : {
                expand: true,
                cwd   : '<%= paths.app %>',
                dest  : '<%= paths.release %>',
                src   : [
                    'favicon.ico',
                    'robots.txt',
                    'fonts/**'
                ]
            }
        },

        concurrent: {
            server: [
                'copy:styles'
            ],
            test  : [
                'copy:styles'
            ]
        },

        'merge-json': {
            merge: {
                files: [
                    {
                        expand : true,
                        flatten: false,
                        cwd    : '<%= paths.app %>',
                        src    : [
                            '**/*.json',
                            '!config/targets/*.json',
                            '!languages/min/*.json'
                        ],
                        dest   : '.tmp/languages',
                        rename : function (dest, src) {
                            var lang = src.match(/[^/]+(?=\/[^/]+\.json$)/gim);
                            src      = src.match(/[^/]+(.json$)/gim);
                            return dest + '/' + lang + '/' + src;
                        }
                    }
                ]
            },
            min: {
                files: {
                    '<%= paths.app %>/languages/min/fr.min.json': ['.tmp/languages/fr/*.json'],
                    '<%= paths.app %>/languages/min/en.min.json': ['.tmp/languages/en/*.json']
                }
            }
        },

        angularFileLoader: {
            options: {
                scripts : [
                    '<%= paths.app %>/**/*.js',
                    '!<%= paths.app %>/**/*.tpl.js',
                    '!<%= paths.app %>/app.module.js',
                    '!<%= paths.app %>/app.config.js',
                    '!<%= paths.app %>/app.release.config.js',
                    '!<%= paths.app %>/app.run.js'
                ],
                startTag: 'start-js',
                endTag  : 'end-js'
            },
            index  : {
                src: ['<%= paths.app %>/index.html']
            }
        },

        less: {
            main   : {
                options: {
                    plugins: [
                        new (require('less-plugin-autoprefix'))()
                    ]
                },
                files  : [
                    {'<%= paths.app %>/styles/main.min.css': '<%= paths.app %>/styles/import.less'}
                ]
            },
            release: {
                options: {
                    plugins: [
                        new (require('less-plugin-autoprefix'))()
                    ]
                },
                files  : [
                    {'.tmp/release/main.min.css': '<%= paths.app %>/styles/import.less'}
                ]
            }
        },

        'less_imports': {
            main: {
                options: {
                    banner: '// Auto import less files by <less_imports> grunt task',
                    import: 'less'
                },
                files  : {
                    '<%= paths.app %>/styles/auto.import.less': [
                        '<%= paths.app %>/styles/*/**.less',
                        '!<%= paths.app %>/styles/auto.import.less'
                    ]
                }
            }
        },

        'string-replace': {
            release: {
                files  : [
                    {
                        expand: true,
                        cwd   : '<%= paths.release %>/styles',
                        src   : 'main.min.css',
                        dest  : '<%= paths.release %>/styles'
                    }
                ],
                options: {
                    replacements: [
                        {
                            pattern    : /..\/..\//g,
                            replacement: '../'
                        }
                    ]
                }
            }
        },

        preprocess: {
            options: {
                context: {
                    config: grunt.file.read('app/config/targets/config.dev.json')
                }
            },
            config : {
                src : '<%= paths.app %>/config/tpls/main.config.tpl.js',
                dest: '<%= paths.app %>/config/main.config.js'
            }
        }
    });

    grunt.registerTask('serve', 'Compile then start a connect web server', function () {
        grunt.task.run([
            'clean:server',
            'preprocess',
            'wiredep',
            'angularFileLoader',
            'less:main',
            'languages',
            'concurrent:server',
            'postcss:server',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('languages', 'Languages task to compile the .json', [
        'clean:languages',
        'merge-json:merge',
        'merge-json:min'
    ]);
};