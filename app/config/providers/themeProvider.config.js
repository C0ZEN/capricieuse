/**
 * Created by C0ZEN on 26/08/2017.
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .config(themeProviderConfig);

    themeProviderConfig.$inject = [
        'themeProvider'
    ];

    function themeProviderConfig(themeProvider) {
        themeProvider
            .setCurrent('origin');
    }

})(window.angular);