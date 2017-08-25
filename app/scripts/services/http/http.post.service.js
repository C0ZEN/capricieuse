/**
 * Created by C0ZEN on 25/08/2017.
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .factory('httpPostService', httpPostService);

    httpPostService.$inject = [
        '$q',
        '$http',
        'config'
    ];

    function httpPostService($q, $http, config) {
        return {
            post: post
        };

        function post($url, $data) {
            var deferred = $q.defer();

            $http.post(config.api.baseUrl + $url, $data)
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