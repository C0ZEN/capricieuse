/**
 * Created by C0ZEN on 25/08/2017.
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .factory('httpPutService', httpPutService);

    httpPutService.$inject = [
        '$q',
        '$http',
        'config'
    ];

    function httpPutService($q, $http, config) {
        return {
            put: put
        };

        function put($url, $data) {
            var deferred = $q.defer();

            $http.put(config.api.baseUrl + $url, $data)
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