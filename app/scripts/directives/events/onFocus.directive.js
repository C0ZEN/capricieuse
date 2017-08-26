/**
 * Created by C0ZEN on 26/08/2017.
 *
 * @ngdoc directive
 * @name cozen-on-focus
 * @scope
 * @restrict A
 * @replace false
 * @transclude false
 * @description
 *
 * [Attrs]
 * @param {function} cozenOnFocus > Callback function called on focus
 *
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .directive('cozenOnFocus', cozenOnFocus);

    cozenOnFocus.$inject = [];

    function cozenOnFocus() {
        return {
            link      : link,
            restrict  : 'A',
            replace   : false,
            transclude: false
        };

        function link(scope, element, attrs) {
            element.bind('focus', function ($event) {
                scope.$apply(function () {
                    scope.$eval(attrs['cozenOnFocus']);
                });
            });
        }
    }

})(window.angular);

