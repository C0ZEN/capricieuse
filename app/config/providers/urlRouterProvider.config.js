/**
 * Created by C0ZEN on 26/08/2017.
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .config(urlRouterProviderConfig);

    urlRouterProviderConfig.$inject = [
        '$urlRouterProvider',
        'config'
    ];

    function urlRouterProviderConfig($urlRouterProvider, config) {
        $urlRouterProvider
            .otherwise('/' + config.states.main + '/home');
    }

})(window.angular);