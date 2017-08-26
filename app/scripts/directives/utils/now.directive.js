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
 * [Attrs]
 * @param {string} cozenNowFormat = moment > Override the default date format
 *
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .directive('cozenNow', cozenNow);

    cozenNow.$inject = [
        '$filter',
        'moment'
    ];

    function cozenNow($filter, moment) {
        return {
            link      : link,
            restrict  : 'A',
            replace   : false,
            transclude: false
        };

        function link(scope, element, attrs) {
            element.text($filter('capitalize')($filter('date')(moment().format(attrs.cozenNowFormat)), true, true));
        }
    }
})(window.angular);