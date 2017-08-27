/**
 * Created by C0ZEN on 25/08/2017.
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .controller('homeController', homeController);

    homeController.$inject = [
        '$log',
        '$timeout'
    ];

    function homeController($log, $timeout) {
        var vm = this;

        // Logs
        $log = $log.getInstance('homeController');
        $log.log('Advanced Log Extender Example: Use Case 1: Example');

        vm.log = function ($data) {
            if (angular.isUndefined($data)) {
                $data = 1;
            }
            console.log($data);
        };

        vm.hello = 'hello !';

        $timeout(function () {
            vm.hello = 'hello you too !';
        }, 2000);
    }

})(window.angular);