/**
 * Created by C0ZEN on 27/08/2017.
 *
 * @ngdoc service
 * @name capricieuseApp.logsServiceMethods
 * @description
 *
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .factory('logsServiceMethods', logsServiceMethods);

    logsServiceMethods.$inject = [
        'config'
    ];

    function logsServiceMethods(config) {

        // Internal data
        var data = {
            separator      : config.debug.logs.separator,
            classNameBefore: config.debug.logs.classNameBefore,
            classNameAfter : config.debug.logs.classNameAfter
        };

        // Public methods
        return {
            getInstance: getInstance
        };

        function getInstance($className) {
            return data.classNameBefore + $className + data.classNameAfter + data.separator;
        }
    }

})(window.angular);