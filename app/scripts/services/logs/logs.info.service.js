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
        '$log'
    ];

    function logsInfoService($log) {

        // Public methods
        return {
            setDefaultAttrValue: setDefaultAttrValue
        };

        function setDefaultAttrValue($service, $attr, $value) {
            if (Utils.isNullOrEmpty($service) || Utils.isNullOrEmpty($attr) || Utils.isNullOrEmpty($value)) {
                return;
            }
            $log = $log.getInstance($service);
            $log.info('Set default value <{$value}> for attr <{$attr}>', arguments);
        }
    }

})(window.angular);