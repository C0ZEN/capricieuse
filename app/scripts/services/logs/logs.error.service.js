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
        '$log'
    ];

    function logsErrorService($log) {

        // Public methods
        return {
            valueNotInList       : valueNotInList,
            attributeIsEmpty     : attributeIsEmpty,
            attributeIsNotString : attributeIsNotString,
            attributeIsNotBoolean: attributeIsNotBoolean,
            attributeIsNotNumber : attributeIsNotNumber
        };

        function valueNotInList($target, $value, $list) {
            if (Utils.isNullOrEmpty($target) || Utils.isNullOrEmpty($value) || Utils.isNullOrEmpty($list)) {
                return;
            }
            $log = $log.getInstance($target);
            $log.error('<{value}> must be a value from the list <{list}>', {
                value: $value,
                list : $list
            });
        }

        function attributeIsEmpty($target, $attribute) {
            if (Utils.isNullOrEmpty($target) || Utils.isNullOrEmpty($attribute)) {
                return;
            }
            $log = $log.getInstance($target);
            $log.error('Attr <{attr}> is null', {
                attr: $attribute
            });
        }

        function attributeIsNotString($target, $attribute) {
            if (Utils.isNullOrEmpty($target) || Utils.isNullOrEmpty($attribute)) {
                return;
            }
            $log = $log.getInstance($target);
            $log.error('Attr <{attr}> is not a string', {
                attr: $attribute
            });
        }

        function attributeIsNotBoolean($target, $attribute) {
            if (Utils.isNullOrEmpty($target) || Utils.isNullOrEmpty($attribute)) {
                return;
            }
            $log = $log.getInstance($target);
            $log.error('Attr <{attr}> is not a boolean', {
                attr: $attribute
            });
        }

        function attributeIsNotNumber($target, $attribute) {
            if (Utils.isNullOrEmpty($target) || Utils.isNullOrEmpty($attribute)) {
                return;
            }
            $log = $log.getInstance($target);
            $log.error('Attr <{attr}> is not a number', {
                attr: $attribute
            });
        }

    }

})(window.angular);