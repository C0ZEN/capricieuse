/**
 * Created by C0ZEN on 26/08/2017.
 *
 * @ngdoc directive
 * @name cozen-now
 * @scope
 * @restrict A
 * @replace false
 * @transclude false
 * @description
 *
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .directive('cozenNow', cozenNow);

    cozenNow.$inject = [
        '$filter'
    ];

    function cozenNow($filter) {
        return {
            link      : link,
            restrict  : 'A',
            replace   : false,
            transclude: false
        };

        function link(scope, element, attrs) {
            element.text($filter('capitalize')($filter('date')(new Date(), attrs.dateNow), true, true));
        }
    }
})(window.angular);