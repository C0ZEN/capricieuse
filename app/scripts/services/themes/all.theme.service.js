/**
 * Created by C0ZEN on 26/08/2017.
 *
 * @ngdoc service
 * @name capricieuseApp.allThemeService
 * @description
 *
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .factory('allThemeService', allThemeService);

    allThemeService.$inject = [
        'config',
        '$log',
        'themeConstants'
    ];

    function allThemeService(config, $log, themeConstants) {

        // Log settings
        $log = $log.getInstance('allThemeService');

        // Public methods
        return {
            get      : get,
            findByKey: findByKey
        };

        function get() {

            // Log
            if (config.debug.logs.theme.enabled) {
                $log.log(config.themes.list);
            }

            // Return the themes array
            return config.themes.list;
        }

        function findByKey($themeKey) {
            var theme = null;

            // Search for the theme by key
            angular.forEach(config.themes.list, function ($theme) {
                if ($theme == $themeKey) {
                    theme = $themeKey;
                }
            });

            if (theme) {
                return theme;
            }

            // Log
            if (config.debug.logs.theme.enabled) {
                $log.error('<{key}> was not found in the theme list !', {
                    key: $themeKey
                });
            }
            return null;
        }
    }

})(window.angular);

