/**
 * Created by C0ZEN on 25/08/2017.
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .constant('config'
             ,
            {
    "api": {
        "baseUrl": "example.com/"
    },
    "deferred": {
        "reject": {
            "defaultCode": 200
        }
    },
    "states": {
        "main": "app"
    },
    "debug": {
        "compile": true,
        "logs": {
            "enabled": true,
            "enhancedColors": true,
            "format": "[hh:mm:sss]",
            "separator": " ",
            "classNameBefore": "[",
            "classNameAfter": "]",
            "restrictedMethods": [
                "info",
                "warn",
                "error",
                "debug",
                "log"
            ],
            "exceptions": {
                "enabled": true
            },
            "http": {
                "enabled": true,
                "enhanced":true
            }
        }
    }
}
        );

}(window.angular));