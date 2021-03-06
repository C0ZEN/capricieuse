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
                "enhanced": true
            },
            "language": {
                "enabled": true
            },
            "test": {
                "enabled": true
            },
            "theme": {
                "enabled": true
            }
        }
    },
    "languages": {
        "defaultLanguage": "fr",
        "list": {
            "fr": {
                "label": "Français",
                "key": "fr",
                "available": true
            },
            "en": {
                "label": "English",
                "key": "en",
                "available": true
            }
        }
    },
    "themes": {
        "defaultTheme": "origin",
        "list": [
            "origin"
        ]
    },
    "directives": {
        "btn": {
            "debug": true
        }
    }
}
        );

}(window.angular));