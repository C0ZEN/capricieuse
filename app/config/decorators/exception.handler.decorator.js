/**
 * Created by C0ZEN on 25/08/2017.
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .config(exceptionHandlerConfig);

    exceptionHandlerConfig.$inject = [
        '$provide'
    ];

    function exceptionHandlerConfig($provide) {
        $provide.decorator('$exceptionHandler', exceptionHandlerDecorator);
    }

    exceptionHandlerDecorator.$inject = [
        '$delegate',
        '$log',
        'config'
    ];

    function exceptionHandlerDecorator($delegate, $log, config) {

        // Log settings
        $log = $log.getInstance('exceptionHandlerDecorator');

        // Decorator
        return decorator;

        function decorator($exception, $cause) {
            var exception = {
                exception: $exception,
                cause    : $cause
            };

            // Log
            if (config.debug.logs.exceptions.enabled) {
                $log.error('Exception {exception} caused by {cause}', exception);
            }

            // Return the original method
            return $delegate($exception, $cause);
        }
    }

}(window.angular));