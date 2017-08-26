/**
 * Created by C0ZEN on 26/08/2017.
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .config(languageProviderConfig);

    languageProviderConfig.$inject = [
        'languageProvider'
    ];

    function languageProviderConfig(languageProvider) {
        languageProvider
            .setList({
                fr: {
                    label    : 'Français',
                    key      : 'fr',
                    available: true
                }
            })
            .setCurrent('fr');
    }

})(window.angular);