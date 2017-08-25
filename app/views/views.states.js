/**
 * Created by C0ZEN on 25/08/2017.
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .config(routes);

    routes.$inject = [
        '$stateProvider'
    ];

    function routes($stateProvider) {
        $stateProvider.state('public', {
            parent  : 'main',
            url     : '',
            template: '<ui-view></ui-view>',
            abstract: true
        });
    }

})(window.angular);