/**
 * Created by C0ZEN on 26/08/2017.
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .run(themeInitiator);

    themeInitiator.$inject = [
        'currentThemeService',
        'themeConstants',
        'allThemeService'
    ];

    function themeInitiator(currentThemeService, themeConstants, allThemeService) {

        // Force the app to set the current theme
        // On run time, currentTheme will be set by the providers
        currentThemeService.update(themeConstants.currentTheme, true);

        // Log the list of themes
        allThemeService.get();
    }

}(window.angular));
