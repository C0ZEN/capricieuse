/**
 * Created by C0ZEN on 26/08/2017.
 *
 * @ngdoc service
 * @name capricieuseApp.currentThemeService
 * @description
 *
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .factory('currentThemeService', currentThemeService);

    currentThemeService.$inject = [
        'config',
        '$log',
        'themeConstants',
        'allThemeService'
    ];

    function currentThemeService(config, $log, themeConstants, allThemeService) {

        // Log settings
        $log = $log.getInstance('currentThemeService');

        // Internal methods
        var methods = {
            addThemeToBody      : addThemeToBody,
            removeThemeToBody   : removeThemeToBody,
            removeAllThemeToBody: removeAllThemeToBody
        };

        // Internal data
        var data = {
            service: 'currentThemeService',
            body   : angular.element(document).find('body')
        };

        // Public methods
        return {
            get      : get,
            update   : update,
            isCurrent: isCurrent
        };

        function get() {

            // Log
            if (config.debug.logs.theme.enabled) {
                $log.info('Current theme is <{key}>', {
                    key: themeConstants.currentTheme
                });
            }

            // Return the current theme key
            return themeConstants.currentTheme;
        }

        function update($newCurrentTheme, $forceUpdate) {
            var theme = allThemeService.findByKey($newCurrentTheme);

            // If the theme was found
            if (theme) {
                var isSame = themeConstants.currentTheme == $newCurrentTheme;

                // If the new theme is different from the old one
                if ($forceUpdate === true || !isSame) {
                    themeConstants.currentTheme = $newCurrentTheme;
                    methods.removeAllThemeToBody();
                    methods.addThemeToBody($newCurrentTheme);

                    // Log
                    if (config.debug.logs.theme.enabled) {
                        var logMsg = '<{key}> is the new current theme';
                        logMsg += $forceUpdate === true ? ' [forced]' : '';
                        $log.info(logMsg, {
                            key: $newCurrentTheme
                        });
                    }
                }
                else {

                    // Log
                    if (config.debug.logs.theme.enabled) {
                        $log.warn('The current theme is already <{key}>', {
                            key: $newCurrentTheme
                        });
                    }
                }
            }
            else {

                // Log
                if (config.debug.logs.theme.enabled) {
                    $log.error('<{key}> does not exist !', {
                        key: $newCurrentTheme
                    });
                }
            }
        }

        function isCurrent($themeKey) {
            var isCurrent = $themeKey == themeConstants.currentTheme;

            // Log
            if (config.debug.logs.theme.enabled) {
                if (isCurrent) {
                    $log.info('<{key}> is the current theme', {
                        key: $themeKey
                    });
                }
                else {
                    $log.warn('<{key}> is not the current theme', {
                        key: $themeKey
                    });
                }
            }

            // Return a boolean
            return isCurrent;
        }

        /// INTERNAL METHODS ///

        function addThemeToBody($theme) {
            data.body.addClass($theme);
        }

        function removeThemeToBody($theme) {
            data.body.removeClass($theme);
        }

        function removeAllThemeToBody() {
            angular.forEach(data.body.classList, function ($class) {
                if ($class == allThemeService.findByKey($class)) {
                    methods.removeThemeToBody($class);
                }
            });
        }
    }

})
(window.angular);