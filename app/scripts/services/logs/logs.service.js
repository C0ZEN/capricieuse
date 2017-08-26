/**
 * Created by C0ZEN on 26/08/2017.
 *
 * @ngdoc service
 * @name capricieuseApp.logsService
 * @description
 *
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .factory('logsService', logsService);

    logsService.$inject = [
        'logsInfoService',
        'logsErrorService'
    ];

    function logsService(logsInfoService, logsErrorService) {

        // Public methods
        return {
            info : logsInfoService,
            error: logsErrorService
        };
    }

})(window.angular);