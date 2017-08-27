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
        $stateProvider.state('home', {
            parent      : 'public',
            url         : '/home',
            templateUrl : 'views/public/home/home.html',
            controller  : 'homeController',
            controllerAs: 'vm',
            data        : {
                pageTitle: 'home'
            }
        });
    }

})(window.angular);