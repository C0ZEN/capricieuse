/**
 * Created by C0ZEN on 27/08/2017.
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .controller('cozenBtnController', cozenBtnController);

    cozenBtnController.$inject = [
        'logsService',
        'config'
    ];

    function cozenBtnController(logsService, config) {
        var vm = this;

        // Common data
        vm.data = {
            controller: 'cozenBtnController',
            directive : 'cozenBtn',
            listeners : [],
            debug     : config.directives.btn.debug
        };

        // Public methods
        vm.methods = {
            onClick: onClick
        };

        function onClick($event) {
            logsService.info.functionCalled(vm.data.controller, 'onClick', vm.data.debug);
            $event.stopPropagation();
            vm.cozenBtnOnClick();
        }
    }

})(window.angular, document);
