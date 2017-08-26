/**
 * Created by C0ZEN on 26/08/2017.
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .config(httpProviderConfig);

    httpProviderConfig.$inject = [
        '$httpProvider',
        'config'
    ];

    function httpProviderConfig($httpProvider, config) {
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $httpProvider.defaults.headers.common['Accept']       = 'application/json';
        $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
    }

})(window.angular);