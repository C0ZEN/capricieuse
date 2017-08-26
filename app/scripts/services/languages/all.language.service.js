/**
 * Created by C0ZEN on 26/08/2017.
 *
 * @ngdoc service
 * @name capricieuseApp.allLanguageService
 * @description
 *
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .factory('allLanguageService', allLanguageService);

    allLanguageService.$inject = [
        'config',
        '$log',
        'languageConstants'
    ];

    function allLanguageService(config, $log, languageConstants) {

        // Log settings
        $log = $log.getInstance('allLanguageService');

        // Public methods
        return {
            get        : get,
            isAvailable: isAvailable,
            findByKey  : findByKey
        };

        function get() {
            var languages = [];

            // Keep only the available languages
            angular.forEach(config.languages.list, function ($language) {
                if ($language.available) {
                    languages.push($language);
                }
            });

            // Log
            if (config.debug.logs.language.enabled) {
                $log.log(languages);
            }

            // Return the languages array
            return languages;
        }

        function isAvailable($languageKey) {
            var isAvailable = false;
            var language    = findByKey($languageKey);

            // If the language was found
            if (language) {

                // If the language is available
                if (language.available) {
                    isAvailable = true;

                    // Log
                    if (config.debug.logs.language.enabled) {
                        $log.info('<{key}> is available !', {
                            key: $languageKey
                        });
                    }
                }
                else {

                    // Log
                    if (config.debug.logs.language.enabled) {
                        $log.warn('<{key}> is not available !', {
                            key: $languageKey
                        });
                    }
                }
                return isAvailable;
            }
            return false;
        }

        function findByKey($languageKey) {
            var language = null;

            // Search for the language by key
            angular.forEach(config.languages.list, function ($language) {
                if ($language.key == $languageKey) {
                    language = $language;
                }
            });

            if (language) {
                return language;
            }

            // Log
            if (config.debug.logs.language.enabled) {
                $log.error('<{key}> was not found in the language list !', {
                    key: $languageKey
                });
            }
            return null;
        }
    }

})(window.angular);

