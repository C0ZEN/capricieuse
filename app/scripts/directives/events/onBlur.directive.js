/**
 * Created by C0ZEN on 26/08/2017.
 *
 * @ngdoc directive
 * @name cozen-on-blur
 * @scope
 * @restrict A
 * @replace false
 * @transclude false
 * @description
 *
 * [Attrs]
 * @param {function} cozenOnBlur > Callback function called on blur
 *
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .directive('cozenOnBlur', cozenOnBlur);

    cozenOnBlur.$inject = [
        '$timeout'
    ];

    function cozenOnBlur($timeout) {
        return {
            link      : link,
            restrict  : 'A',
            replace   : false,
            transclude: false
        };

        function link(scope, element, attrs) {
            element.bind('blur', function ($event) {
                $timeout(function () {
                    scope.$eval(attrs.cozenOnBlur);
                });
            });
        }
    }

})(window.angular);

