/**
 * Created by C0ZEN on 25/08/2017.
 *
 * @ngdoc service
 * @name capricieuseApp.httpService
 * @description
 *
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .factory('httpService', httpService);

    httpService.$inject = [
        'httpGetService',
        'httpPathService',
        'httpPostService',
        'httpPutService',
        'httpCustomService'
    ];

    function httpService(httpGetService, httpPathService, httpPostService, httpPutService, httpCustomService) {
        return {
            get   : httpGetService.get,
            patch : httpPathService.patch,
            post  : httpPostService.post,
            put   : httpPutService.put,
            custom: httpCustomService.custom
        };
    }

}(window.angular));