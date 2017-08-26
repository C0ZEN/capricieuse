/**
 * Created by C0ZEN on 26/08/2017.
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .config(translateProviderConfig);

    translateProviderConfig.$inject = [
        '$translateProvider',
        'config'
    ];

    function translateProviderConfig($translateProvider, config) {
        $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
        $translateProvider.useStaticFilesLoader({
                prefix: '/languages/min/',
                suffix: '.min.json'
            }
        );
        $translateProvider.preferredLanguage(config.languages.defaultLanguage);
    }

})(window.angular);