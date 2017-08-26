/**
 * Created by C0ZEN on 26/08/2017.
 *
 * @ngdoc service
 * @name capricieuseApp.testErrorService
 * @description
 *
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .factory('testErrorService', testErrorService);

    testErrorService.$inject = [
        'testServiceMethods',
        '$log'
    ];

    function testErrorService(testServiceMethods, $log) {

        // Log settings
        $log = $log.getInstance('testServiceMethods');

        // Public methods
        return {
            isAttrString: isAttrString
        };

        function isAttrString($config, $property) {
            if (testServiceMethods.isUndefined($config, $property)) {
                return false;
            }
            else if (!testServiceMethods.isAttrString($config, $property)) {
                return false;
            }
            return true;
        }
    }

})(window.angular);

