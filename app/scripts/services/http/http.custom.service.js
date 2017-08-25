/**
 * Created by C0ZEN on 25/08/2017.
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .factory('httpCustomService', httpCustomService);

    httpCustomService.$inject = [
        '$q',
        '$http',
        'config'
    ];

    function httpCustomService($q, $http, config) {
        return {
            custom: custom
        };

        function custom($method, $url, $data) {
            var deferred = $q.defer();

            $http({
                methods: $method,
                url    : $url,
                data   : $data,
                session: {}

            })
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