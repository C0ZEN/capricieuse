/**
 * Created by C0ZEN on 26/08/2017.
 *
 * @ngdoc service
 * @name capricieuseApp.currentLanguageService
 * @description
 *
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .factory('currentLanguageService', currentLanguageService);

    currentLanguageService.$inject = [
        'config',
        '$log',
        'languageConstants',
        'allLanguageService',
        'moment'
    ];

    function currentLanguageService(config, $log, languageConstants, allLanguageService, moment) {

        // Log settings
        $log = $log.getInstance('currentLanguageService');

        // Public methods
        return {
            get      : get,
            update   : update,
            isCurrent: isCurrent
        };

        function get($extended) {

            // Log
            if (config.debug.logs.language.enabled) {
                $log.info('Current language is <{key}>', {
                    key: languageConstants.currentLanguage
                });
            }

            // Return the whole language object instead of the key
            if ($extended === true) {
                var language = allLanguageService.findByKey(languageConstants.currentLanguage);

                // If the language was found
                if (language) {

                    // Log
                    if (config.debug.logs.language.enabled) {
                        $log.log(language);
                    }
                    return language;
                }
            }

            // Return the current language key
            return languageConstants.currentLanguage;
        }

        function update($newCurrentLanguage, $forceUpdate) {
            var language = allLanguageService.findByKey($newCurrentLanguage);

            // If the language was found
            if (language) {
                var isAvailable = allLanguageService.isAvailable($newCurrentLanguage);

                // If the language is available
                if (isAvailable) {
                    var isSame = languageConstants.currentLanguage == $newCurrentLanguage;

                    // If the new language is different from the old one
                    if ($forceUpdate === true || !isSame) {
                        languageConstants.currentLanguage = $newCurrentLanguage;

                        // $translate.use($newCurrentLanguage);
                        // tmhDynamicLocale.set($newCurrentLanguage);
                        moment.locale($newCurrentLanguage);

                        // Log
                        if (config.debug.logs.language.enabled) {
                            var logMsg = '<{key}> is the new current language';
                            logMsg += $forceUpdate === true ? ' [forced]' : '';
                            $log.info(logMsg, {
                                key: $newCurrentLanguage
                            });
                        }
                    }
                    else {

                        // Log
                        if (config.debug.logs.language.enabled) {
                            $log.warn('The current language is already <{key}>', {
                                key: $newCurrentLanguage
                            });
                        }
                    }
                }
                else {

                    // Log
                    if (config.debug.logs.language.enabled) {
                        $log.error('<{key}> is not available !', {
                            key: $newCurrentLanguage
                        });
                    }
                }
            }
            else {

                // Log
                if (config.debug.logs.language.enabled) {
                    $log.error('<{key}> does not exist !', {
                        key: $newCurrentLanguage
                    });
                }
            }
        }

        function isCurrent($languageKey) {
            var isCurrent = $languageKey == languageConstants.currentLanguage;

            // Log
            if (config.debug.logs.language.enabled) {
                if (isCurrent) {
                    $log.info('<{key}> is the current language', {
                        key: $languageKey
                    });
                }
                else {
                    $log.warn('<{key}> is not the current language', {
                        key: $languageKey
                    });
                }
            }

            // Return a boolean
            return isCurrent;
        }
    }

})(window.angular);