/**
 * Created by C0ZEN on 26/08/2017.
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .provider('theme', themeProvider);

    themeProvider.$inject = [
        'config',
        'themeConstants'
    ];

    function themeProvider(config, themeConstants) {
        var data = {
            provider: 'themeProvider'
        };

        // Update the currentTheme which is null by default
        themeConstants.currentTheme = config.themes.defaultTheme;

        // Update the default current theme
        // On run time, the app will be configured to use it
        this.setCurrent = function ($newCurrentThemeKey) {
            var isAvailable = false;

            // Check if the new theme is in the list of current themes
            angular.forEach(config.themes.list, function ($theme) {
                if ($theme == $newCurrentThemeKey) {
                    isAvailable = true;
                }
            });

            // If the new theme is good
            if (isAvailable) {
                themeConstants.currentTheme = $newCurrentThemeKey;
            }
            else {
                Logs.errorInProvider(data.provider);
                Logs.dataMustBeInThisList($newCurrentThemeKey, config.themes.list);
                Logs.warn1p('Callback on default theme', themeConstants.currentTheme);
            }
            return this;
        };

        this.$get = theme;

        theme.$inject = [];

        function theme() {
            return {};
        }
    }

})(window.angular);