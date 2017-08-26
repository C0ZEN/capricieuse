/**
 * Created by C0ZEN on 25/08/2017.
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .config(httpConfig);

    httpConfig.$inject = [
        '$provide'
    ];

    function httpConfig($provide) {
        $provide.decorator('$http', httpDecorator);
    }

    httpDecorator.$inject = [
        '$delegate',
        '$log',
        'config'
    ];

    function httpDecorator($delegate, $log, config) {

        // Log settings
        $log = $log.getInstance('httpDecorator');

        // Internal methods
        var methods = {
            log: log
        };

        // Decorator
        return {
            get  : get,
            post : post,
            put  : put,
            patch: patch
        };

        function get($url, $config) {
            var request = angular.extend({}, $config || {}, {
                method: 'GET',
                url   : $url
            });
            methods.log(request);

            // Return the original method
            return $delegate(request);
        }

        function post($url, $data, $config) {
            var request = angular.extend({}, $config || {}, {
                method: 'POST',
                url   : $url,
                data  : $data
            });
            methods.log(request);

            // Return the original method
            return $delegate(request);
        }

        function put($url, $data, $config) {
            var request = angular.extend({}, $config || {}, {
                method: 'PUT',
                url   : $url,
                data  : $data
            });
            methods.log(request);

            // Return the original method
            return $delegate(request);
        }

        function patch($url, $data, $config) {
            var request = angular.extend({}, $config || {}, {
                method: 'PATCH',
                url   : $url,
                data  : $data
            });
            methods.log(request);

            // Return the original method
            return $delegate(request);
        }

        /// INTERNAL METHODS ///

        function log($request) {

            // Common log (methods + url)
            if (config.debug.logs.http.enabled) {
                $log.log('{method} {url}', $request);

                // Enhanced log (data)
                if (config.debug.logs.http.enhanced && $request.data) {
                    $log.log($request.data);
                }
            }
        }
    }

}(window.angular));