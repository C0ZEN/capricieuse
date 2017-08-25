/**
 * Created by C0ZEN on 25/08/2017.
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .config(routes);

    routes.$inject = [
        '$stateProvider',
        'config'
    ];

    function routes($stateProvider, config) {
        $stateProvider.state('main', {
            url     : '/' + config.states.main,
            template: '<ui-view></ui-view>',
            abstract: true
        });
    }

})(window.angular);