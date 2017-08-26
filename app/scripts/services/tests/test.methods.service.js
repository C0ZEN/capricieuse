/**
 * Created by C0ZEN on 26/08/2017.
 *
 * @ngdoc service
 * @name capricieuseApp.testServiceMethods
 * @description
 *
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .factory('testServiceMethods', testServiceMethods);

    testServiceMethods.$inject = [
        'config',
        'logsService'
    ];

    function testServiceMethods(config, logsService) {
        return {
            isUndefined  : isUndefined,
            isString     : isString,
            isBoolean    : isBoolean,
            isNumber     : isNumber,
            isAttrString : isAttrString,
            isAttrBoolean: isAttrBoolean,
            isAttrNumber : isAttrNumber
        };

        function isUndefined($config, $property, $required) {
            if (angular.isUndefined($required)) {
                $required = true;
            }
            if (angular.isUndefined($config.attrs[$property])) {
                if (config.debug.logs.test.enabled && $required === true) {
                    logsService.error.attributeIsEmpty($config.directive, $property);
                }
                return true;
            }
            return false;
        }

        function isString($config, $property) {
            if (!Utils.isString($config.scope[$property]) || Utils.isNullOrEmpty($config.scope[$property])) {
                if (config.debug.logs.test.enabled) {
                    logsService.error.attributeIsNotString($config.directive, $property);
                }
                return false;
            }
            return true;
        }

        function isBoolean($config, $property) {
            if (!Utils.isBoolean(($config.scope[$property])) || Utils.isNullOrEmpty($config.scope[$property])) {
                if (config.debug.logs.test.enabled) {
                    logsService.error.attributeIsNotBoolean($config.directive, $property);
                }
                return false;
            }
            return true;
        }

        function isNumber($config, $property) {
            if (!angular.isNumber($config.scope[$property]) || Utils.isNullOrEmpty($config.scope[$property])) {
                if (config.debug.logs.test.enabled) {
                    logsService.error.attributeIsNotNumber($config.directive, $property);
                }
                return false;
            }
            return true;
        }

        function isAttrString($config, $property) {
            if (!Utils.isString($config.attrs[$property]) || Utils.isNullOrEmpty($config.attrs[$property])) {
                if (config.debug.logs.test.enabled) {
                    logsService.error.attributeIsNotString($config.directive, $property);
                }
                return false;
            }
            return true;
        }

        function isAttrBoolean($config, $property) {
            if (!Utils.isBoolean(($config.attrs[$property])) || Utils.isNullOrEmpty($config.attrs[$property])) {
                if (config.debug.logs.test.enabled) {
                    logsService.error.attributeIsNotBoolean($config.directive, $property);
                }
                return false;
            }
            return true;
        }

        function isAttrNumber($config, $property) {
            if (!angular.isNumber($config.attrs[$property]) || Utils.isNullOrEmpty($config.attrs[$property])) {
                if (config.debug.logs.test.enabled) {
                    logsService.error.attributeIsNotNumber($config.directive, $property);
                }
                return false;
            }
            return true;
        }
    }

})(window.angular);

