/**
 * Created by C0ZEN on 26/08/2017.
 *
 * @ngdoc service
 * @name capricieuseApp.logsErrorService
 * @description
 *
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .factory('logsErrorService', logsErrorService);

    logsErrorService.$inject = [
        '$log',
        'logsServiceMethods'
    ];

    function logsErrorService($log, logsServiceMethods) {

        // Public methods
        return {
            valueNotInList       : valueNotInList,
            attributeIsEmpty     : attributeIsEmpty,
            attributeIsNotString : attributeIsNotString,
            attributeIsNotBoolean: attributeIsNotBoolean,
            attributeIsNotNumber : attributeIsNotNumber
        };

        function valueNotInList($target, $value, $list, $enabled) {
            if ($enabled === true) {
                if (Utils.isNullOrEmpty($target) || Utils.isNullOrEmpty($value) || Utils.isNullOrEmpty($list)) {
                    return;
                }
                $log.error(logsServiceMethods.getInstance($target) + '<{value}> must be a value from the list <{list}>', {
                    value: $value,
                    list : $list
                });
            }
        }

        function attributeIsEmpty($target, $attribute, $enabled) {
            if ($enabled === true) {
                if (Utils.isNullOrEmpty($target) || Utils.isNullOrEmpty($attribute)) {
                    return;
                }
                $log.error(logsServiceMethods.getInstance($target) + 'Attr <{attr}> is null', {
                    attr: $attribute
                });
            }
        }

        function attributeIsNotString($target, $attribute, $enabled) {
            if ($enabled === true) {
                if (Utils.isNullOrEmpty($target) || Utils.isNullOrEmpty($attribute)) {
                    return;
                }
                $log.error(logsServiceMethods.getInstance($target) + 'Attr <{attr}> is not a string', {
                    attr: $attribute
                });
            }
        }

        function attributeIsNotBoolean($target, $attribute, $enabled) {
            if ($enabled === true) {
                if (Utils.isNullOrEmpty($target) || Utils.isNullOrEmpty($attribute)) {
                    return;
                }
                $log.error(logsServiceMethods.getInstance($target) + 'Attr <{attr}> is not a boolean', {
                    attr: $attribute
                });
            }
        }

        function attributeIsNotNumber($target, $attribute, $enabled) {
            if ($enabled === true) {
                if (Utils.isNullOrEmpty($target) || Utils.isNullOrEmpty($attribute)) {
                    return;
                }
                $log.error(logsServiceMethods.getInstance($target) + 'Attr <{attr}> is not a number', {
                    attr: $attribute
                });
            }
        }

    }

})(window.angular);