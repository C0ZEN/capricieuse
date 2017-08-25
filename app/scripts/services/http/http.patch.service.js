/**
 * Created by C0ZEN on 25/08/2017.
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .factory('httpPatchService', httpPatchService);

    httpPatchService.$inject = [
        '$q',
        '$http',
        'config'
    ];

    function httpPatchService($q, $http, config) {
        return {
            patch: patch
        };

        function patch($url, $data) {
            var deferred = $q.defer();

            $http.patch(config.api.baseUrl + $url, $data)
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