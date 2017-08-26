/**
 * Created by C0ZEN on 26/08/2017.
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .config(momentProviderConfig);

    momentProviderConfig.$inject = [
        'moment',
        'config'
    ];

    function momentProviderConfig(moment, config) {
        moment.locale(config.languages.defaultLanguage);
    }

})(window.angular);