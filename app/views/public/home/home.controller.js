/**
 * Created by C0ZEN on 25/08/2017.
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = [
        '$log'
    ];

    function homeCtrl($log) {
        var vm = this;

        // Logs
        $log = $log.getInstance('homeCtrl');
        $log.log("Advanced Log Extender Example: Use Case 1: Example");
    }

})(window.angular);