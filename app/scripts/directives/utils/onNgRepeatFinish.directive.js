/**
 * Created by C0ZEN on 26/08/2017.
 *
 * @ngdoc directive
 * @name cozen-on-ng-repeat-finish
 * @scope
 * @restrict A
 * @replace false
 * @transclude false
 * @description
 *
 * [Attrs]
 * @param {function} cozenOnNgRepeatFinish > Callback function called on finish
 *
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .directive('cozenOnNgRepeatFinish', cozenOnNgRepeatFinish);

    cozenOnNgRepeatFinish.$inject = [
        '$timeout'
    ];

    function cozenOnNgRepeatFinish($timeout) {
        return {
            required  : 'ngRepeat',
            link      : link,
            restrict  : 'A',
            replace   : false,
            transclude: false
        };

        function link(scope, element, attrs) {

            // Check if the current element is the last
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$eval(attrs.cozenOnNgRepeatFinish);
                });
            }
        }
    }

})(window.angular);

