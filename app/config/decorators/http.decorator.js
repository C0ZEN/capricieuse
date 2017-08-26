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
        console.log(arguments);

        // Log settings
        $log = $log.getInstance('httpDecorator');

        // Internal methods
        var methods = {
            log: log
        };

        $delegate.get    = getMethod;
        $delegate.post   = postMethod;
        $delegate.put    = putMethod;
        $delegate.patch  = patchMethod;
        $delegate.delete = deleteMethod;

        // Decorator
        return $delegate;

        function getMethod($url, $config) {
            console.log(arguments);
            var request = angular.extend({}, $config || {}, {
                method: 'GET',
                url   : $url
            });
            methods.log(request);

            // Return the original method
            return $delegate(request);
        }

        function postMethod($url, $data, $config) {
            var request = angular.extend({}, $config || {}, {
                method: 'POST',
                url   : $url,
                data  : $data
            });
            methods.log(request);

            // Return the original method
            return $delegate(request);
        }

        function putMethod($url, $data, $config) {
            var request = angular.extend({}, $config || {}, {
                method: 'PUT',
                url   : $url,
                data  : $data
            });
            methods.log(request);

            // Return the original method
            return $delegate(request);
        }

        function patchMethod($url, $data, $config) {
            var request = angular.extend({}, $config || {}, {
                method: 'PATCH',
                url   : $url,
                data  : $data
            });
            methods.log(request);

            // Return the original method
            return $delegate(request);
        }

        function deleteMethod($url, $config) {
            var request = angular.extend({}, $config || {}, {
                method: 'DELETE',
                url   : $url
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