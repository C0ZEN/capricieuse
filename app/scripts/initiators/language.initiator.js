/**
 * Created by C0ZEN on 26/08/2017.
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .run(languageInitiator);

    languageInitiator.$inject = [
        'currentLanguageService',
        'languageConstants',
        'allLanguageService'
    ];

    function languageInitiator(currentLanguageService, languageConstants, allLanguageService) {

        // Force the app the set the current language
        // On run time, currentLanguage will be set by the providers
        currentLanguageService.update(languageConstants.currentLanguage, true);

        // Log the list of languages
        allLanguageService.get();
    }

}(window.angular));
