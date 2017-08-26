/**
 * Created by C0ZEN on 26/08/2017.
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .provider('language', languageProvider);

    languageProvider.$inject = [
        'config',
        'languageConstants'
    ];

    function languageProvider(config, languageConstants) {
        var data = {
            provider: 'languageProvider'
        };

        // Update the currentLanguage which is null by default
        languageConstants.currentLanguage = config.languages.defaultLanguage;

        // Update the list of languages (object of objects)
        // {name:{label, key, available}}
        this.setList = function ($languagesList) {
            var isCorrect = true;

            // Check if the new list is correct
            angular.forEach($languagesList, function ($language) {
                if (!Utils.hasOwnProperty($language, 'label') || !Utils.isString($language.label)) {
                    isCorrect = false;
                }
                if (!Utils.hasOwnProperty($language, 'key') || !Utils.isString($language.key)) {
                    isCorrect = false;
                }
                if (!Utils.hasOwnProperty($language, 'available') || !Utils.isBoolean($language.available)) {
                    isCorrect = false;
                }
            });

            // If the list is correct
            if (isCorrect) {
                config.languages.list = $languagesList;
            }
            else {
                Logs.errorInProvider(data.provider);
                Logs.error('Wrong language list');
                Logs.warn('Callback on language default list');
            }

            return this;
        };

        // Update the default current language
        // On run time, the app will be configured to use it
        this.setCurrent = function ($newCurrentLanguageKey) {
            var isAvailable = false, languageList = [];

            // Check if the new language is in the list of current languages
            angular.forEach(config.languages.list, function ($language) {
                languageList.push($language.key);
                if ($language.key == $newCurrentLanguageKey) {
                    isAvailable = true;
                }
            });

            // If the new language is good
            if (isAvailable) {
                languageConstants.currentLanguage = $newCurrentLanguageKey;
            }
            else {
                Logs.errorInProvider(data.provider);
                Logs.dataMustBeInThisList($newCurrentLanguageKey, languageList);
                Logs.warn1p('Callback on default language', languageConstants.currentLanguage);
            }
            return this;
        };

        this.$get = language;

        language.$inject = [];

        function language() {
            return {};
        }
    }

})(window.angular);
