/**
 * Created by C0ZEN on 26/08/2017.
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .config(qProviderConfig);

    qProviderConfig.$inject = [
        '$qProvider',
        'config'
    ];

    function qProviderConfig($qProvider, config) {
        $qProvider
            .errorOnUnhandledRejections(false);
    }

})(window.angular);