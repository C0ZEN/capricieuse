/**
 * Created by C0ZEN on 26/08/2017.
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .config(compileProviderConfig);

    compileProviderConfig.$inject = [
        '$compileProvider',
        'config'
    ];

    function compileProviderConfig($compileProvider, config) {
        $compileProvider
            .debugInfoEnabled(config.debug.compile)
            .aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|blob):/);
    }

})(window.angular);