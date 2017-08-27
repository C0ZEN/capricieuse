/**
 * Created by C0ZEN on 26/08/2017.
 *
 * @ngdoc service
 * @name capricieuseApp.logsInfoService
 * @description
 *
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .factory('logsInfoService', logsInfoService);

    logsInfoService.$inject = [
        '$log',
        'logsServiceMethods'
    ];

    function logsInfoService($log, logsServiceMethods) {

        // Public methods
        return {
            setDefaultAttrValue: setDefaultAttrValue,
            functionCalled     : functionCalled
        };

        function setDefaultAttrValue($service, $attr, $value, $enabled) {
            if ($enabled === true) {
                if (Utils.isNullOrEmpty($service) || Utils.isNullOrEmpty($attr) || Utils.isNullOrEmpty($value)) {
                    return;
                }
                $log.info(logsServiceMethods.getInstance($service) + 'Set default value <{$value}> for attr <{$attr}>', {
                    $attr : $attr,
                    $value: $value
                });
            }
        }

        function functionCalled($service, $function, $enabled) {
            if ($enabled === true) {
                if (Utils.isNullOrEmpty($service) || Utils.isNullOrEmpty($function)) {
                    return;
                }
                $log.info(logsServiceMethods.getInstance($service) + '<{$function}> called', {
                    $function: $function
                });
            }
        }
    }

})(window.angular);