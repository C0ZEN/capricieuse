/**
 * Created by C0ZEN on 25/08/2017.
 *
 * @ngdoc service
 * @name capricieuseApp.httpGetService
 * @description
 *
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .factory('httpGetService', httpGetService);

    httpGetService.$inject = [
        '$q',
        '$http',
        'config'
    ];

    function httpGetService($q, $http, config) {
        return {
            get: get
        };

        function get($url) {
            var deferred = $q.defer();

            $http.get(config.api.baseUrl + $url)
                .then(onSuccess)
                .catch(onError)
            ;
            return deferred.promise;

            function onSuccess($response) {
                deferred.resolve($response);
            }

            function onError($response) {
                deferred.reject($response, config.defered.reject.defaultCode);
            }
        }
    }

}(window.angular));