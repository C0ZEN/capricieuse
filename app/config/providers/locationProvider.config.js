/**
 * Created by C0ZEN on 26/08/2017.
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .config(locationProviderConfig);

    locationProviderConfig.$inject = [
        '$locationProvider',
        'config'
    ];

    function locationProviderConfig($locationProvider, config) {
        $locationProvider
            .html5Mode({
                enabled    : false,
                requireBase: false
            })
            .hashPrefix('!');
    }

})(window.angular);