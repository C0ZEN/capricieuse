/**
 * @ngdoc directive
 * @name cozen-test-error
 * @scope
 * @restrict E
 * @replace false
 * @transclude false
 * @description
 *
 * [Scope]
 * @param {boolean} cozenTestErrorBoolean = true    > Simulate the check of a boolean
 * @param {string}  cozenTestErrorType    = default > Simulate the check of a string with specific values (default, other) [shortcuts]
 *
 * [Attrs]
 * @param {string} cozenTestErrorName > Name of the directive for logs [required]
 *
 * [Shortcuts]
 * @param {null} cozenTestErrorTypeDefault
 * @param {null} cozenTestErrorTypeOther
 *
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .directive('cozenTestError', cozenTestError);

    cozenTestError.$inject = [
        'testService',
        '$log'
    ];

    function cozenTestError(testService, $log) {

        // Log settings
        $log = $log.getInstance('cozenTestError');

        return {
            link      : link,
            restrict  : 'E',
            replace   : false,
            transclude: false,
            scope     : {
                cozenTestErrorBoolean: '=?',
                cozenTestErrorType   : '=?',
                cozenTestErrorName   : '@'
            }
        };

        function link(scope, element, attrs) {

            // Internal methods
            var methods = {
                init   : init,
                destroy: destroy
            };

            // Internal data
            var data   = {
                directive: 'cozenTestError',
                types    : [
                    'default',
                    'other'
                ]
            };
            var config = testService.getConfig(data.directive, scope, attrs);

            methods.init();

            function init() {
                $log.log('initialing...');

                // Check that the cozenTestErrorName is correct [required]
                if (testService.error.isAttrString(config, 'cozenTestErrorName')) {
                    $log.log('initialing started for ' + scope.cozenTestErrorName);
                }
                else {
                    $log.log('initialing failed');
                    return;
                }

                // Set default values
                testService.setDefault(config, 'cozenTestErrorBoolean', true);
                testService.setDefault(config, 'cozenTestErrorType', 'default', data.types);

                // Init stuff
                element.on('$destroy', methods.destroy);
            }

            function destroy() {
                element.off('$destroy', methods.destroy);
            }
        }
    }

})(window.angular);

