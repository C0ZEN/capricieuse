/**
 * @ngdoc directive
 * @name capricieuseApp.directive:cozen-btn
 * @scope
 * @restrict E
 * @replace false
 * @transclude false
 *
 * @description
 *
 * [Scope params, one-way binding]
 * @param {string} cozenBtnLabel > Label [translate]
 *
 * [Scope params, two-way binding]
 * @param {function} cozenBtnOnClick > Callback function called on click
 *
 * [Attrs params]
 *
 *
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .directive('cozenBtn', cozenBtn);

    cozenBtn.$inject = [];

    function cozenBtn() {
        return {
            link            : link,
            restrict        : 'E',
            replace         : false,
            transclude      : false,
            scope           : {
                cozenBtnLabel  : '@',
                cozenBtnOnClick: '&'
            },
            templateUrl     : 'scripts/directives/ui/btn/btn.template.html',
            controller      : 'cozenBtnController',
            controllerAs    : 'vm',
            bindToController: true
        };

        function link(scope, element, attrs) {
            var methods = {
                init   : init,
                destroy: destroy
            };

            methods.init();

            // Execute the one shot stuff on creation of the directive
            function init() {

                // Destroy listeners
                element.on('$destroy', methods.destroy);
                scope.vm.data.listeners.push(scope.$on('$destroy', methods.destroy));
            }

            // Unbind and destroy all listeners and watchers
            function destroy() {
                element.off('$destroy', methods.destroy);
                angular.forEach(scope.vm.data.listeners, function ($listener) {
                    $listener();
                });
            }
        }
    }

})(window.angular);
