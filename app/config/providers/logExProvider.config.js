/**
 * Created by C0ZEN on 26/08/2017.
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .config(logExProviderConfig);

    logExProviderConfig.$inject = [
        'logExProvider',
        'config'
    ];

    function logExProviderConfig(logExProvider, config) {
        logExProvider.enableLogging(config.debug.logs.enabled);
        logExProvider.disableDefaultColors(!config.debug.logs.enhancedColors);
        logExProvider.overrideLogPrefix(function (className) {
            var $injector       = angular.injector(['ng']);
            var $filter         = $injector.get('$filter');
            var separator       = config.debug.logs.separator;
            var classNameBefore = config.debug.logs.classNameBefore;
            var classNameAfter  = config.debug.logs.classNameAfter;
            var format          = config.debug.logs.format;
            var now             = $filter('date')(new Date(), format);
            return '' + now + (!angular.isString(className) ? '' : classNameBefore + className + classNameAfter + separator);
        });
        logExProvider.restrictLogMethods(config.debug.logs.restrictedMethods);
        logExProvider.useTemplates(true);
    }

})(window.angular);