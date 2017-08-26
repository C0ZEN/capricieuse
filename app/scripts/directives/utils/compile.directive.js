/**
 * Created by C0ZEN on 26/08/2017.
 *
 * @ngdoc directive
 * @name cozen-compile
 * @scope
 * @restrict A
 * @replace false
 * @transclude false
 * @description
 *
 * @param {string}  cozenCompile                    > The text you want to convert
 * @param {boolean} cozenCompileRewriteHtml = false > Perform a replace of the text to avoid breaking HTML text
 *
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .directive('cozenCompile', cozenCompile);

    cozenCompile.$inject = [
        '$compile',
        '$sce'
    ];

    function cozenCompile($compile, $sce) {
        return {
            link      : link,
            restrict  : 'A',
            replace   : false,
            transclude: false
        };

        function link(scope, element, attrs) {

            // Default value for cozenCompileRewriteHtml
            scope.cozenCompileRewriteHtml = angular.isDefined(attrs.cozenCompileRewriteHtml) ? JSON.parse(attrs.cozenCompileRewriteHtml) : false;

            scope.$watch(
                function (scope) {
                    return scope.$eval(attrs.cozenCompile);
                },
                function (value) {

                    // Rewrite the HTML
                    if (scope.cozenCompileRewriteHtml) {
                        value = $sce.valueOf(value);
                        value = value.replace(/&lt;/g, '<');
                        value = value.replace(/&gt;/g, '>');
                    }
                    element.html(value);
                    $compile(element.contents())(scope);
                }
            );
        }
    }

})(window.angular);
