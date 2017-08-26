/**
 * Created by C0ZEN on 26/08/2017.
 *
 * @ngdoc service
 * @name capricieuseApp.testService
 * @description
 *
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .factory('testService', testService);

    testService.$inject = [
        'testErrorService',
        'testServiceMethods',
        'logsService',
        '$log',
        'config'
    ];

    function testService(testErrorService, testServiceMethods, logsService, $log, config) {
        
        // Internal methods
        var methods = {
            setDefault             : setDefaultI,
            setDefaultWithShortcuts: setDefaultWithShortcuts
        };

        // Log settings
        $log = $log.getInstance('testService');

        // Public methods
        return {
            error         : testErrorService,
            getConfig     : getConfig,
            setDefault    : setDefault,
            setDefaultAttr: setDefaultAttr
        };

        function getConfig($directive, $scope, $attrs) {
            return {
                directive: $directive,
                scope    : $scope,
                attrs    : $attrs
            };
        }

        function setDefault($config, $property, $defaultValue, $shortcuts) {
            if (angular.isDefined($shortcuts)) {
                methods.setDefaultWithShortcuts($config, $property, $defaultValue, $shortcuts);
            }
            else {
                methods.setDefault($config, $property, $defaultValue, true, false);
            }
        }

        function setDefaultAttr($config, $property, $defaultValue) {
            methods.setDefault($config, $property, $defaultValue, false, false);
        }

        /// INTERNAL METHODS ///

        function setDefaultI($config, $property, $defaultValue, $scope, $required) {

            // Check if the value is undefined
            // If undefined, set the default value
            if (testServiceMethods.isUndefined($config, $property, $required)) {
                set();
            }

            // Else, the value is defined, we must check that the value is correct
            else {
                var isCorrect, defaultValueType = typeof $defaultValue;
                switch (defaultValueType) {
                    case 'boolean':
                        isCorrect = $scope ? testServiceMethods.isBoolean($config, $property) : testServiceMethods.isAttrBoolean($config, $property);
                        break;
                    case 'number':
                        isCorrect = $scope ? testServiceMethods.isNumber($config, $property) : testServiceMethods.isAttrNumber($config, $property);
                        break;
                    case 'string':
                        isCorrect = $scope ? testServiceMethods.isString($config, $property) : testServiceMethods.isAttrString($config, $property);
                        break;
                }

                // If the type is not correct, set the default value instead
                if (!isCorrect) {
                    set();
                }
            }

            function set() {
                $config.scope[$property] = $defaultValue;
                if (config.debug.logs.test.enabled) {
                    logsService.info.setDefaultAttrValue($config.directive, $property, $defaultValue);
                }
            }
        }

        function setDefaultWithShortcuts($config, $property, $defaultValue, $shortcuts) {

            // Check if the value is undefined
            // If undefined, check if a shortcut is set
            var i, length;
            if (testServiceMethods.isUndefined($config, $property) && angular.isArray($shortcuts)) {

                // Loop through shortcuts
                for (i = 0, length = $shortcuts.length; i < length; i++) {

                    // If one is set
                    if (angular.isDefined($config.attrs[$property + Utils.capitalizeFirstLetter($shortcuts[i])])) {

                        // Update the scope property
                        $config.scope[$property] = $defaultValue;
                        return;
                    }
                }

                // Else, there is no shortcuts, set the default value
                set();
            }

            // Else, the value is defined, we must check that the value is correct
            else {

                // If the type is not correct, set the default value instead
                if (!testServiceMethods.isString($config, $property)) {
                    set();
                }
                else {

                    // Loop through shortcuts
                    for (i = 0, length = $shortcuts.length; i < length; i++) {

                        // Check if the value is in list of shortcuts
                        // To make sure that it's possible
                        if ($config.scope[$property] == $shortcuts[i]) {
                            return;
                        }
                    }

                    // If not correct, set the default value
                    if (config.debug.logs.test.enabled) {
                        logsService.error.valueNotInList($config.directive, $property, $shortcuts);
                    }
                    set();
                }
            }

            function set() {
                $config.scope[$property] = $defaultValue;
                if (config.debug.logs.test.enabled) {
                    logsService.info.setDefaultAttrValue($config.directive, $property, $defaultValue);
                }
            }
        }
    }

})(window.angular);

