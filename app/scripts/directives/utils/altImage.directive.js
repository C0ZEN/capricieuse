/**
 * Created by C0ZEN on 26/08/2017.
 *
 * @ngdoc directive
 * @name cozen-alt-image
 * @scope
 * @restrict A
 * @replace false
 * @transclude false
 * @description
 * A simple directive used to replace the image src with a default one when an error with the image was found
 * Also, you don't need to put an src or ng-src on the image
 *
 * [Attrs]
 * @param {string} cozenAltImageSrc > Default img src
 *
 * [Attrs]
 * @param {object} cozenAltImage > Object to configure the alternative image
 *
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .directive('cozenAltImage', cozenAltImage);

    cozenAltImage.$inject = [
        'testService'
    ];

    function cozenAltImage(testService) {
        return {
            required  : 'img',
            link      : link,
            restrict  : 'A',
            replace   : false,
            transclude: false,
            scope     : {
                cozenAltImageSrc: '=?'
            }
        };

        function link(scope, element, attrs) {
            var methods = {
                init    : init,
                destroy : destroy,
                setSrc  : setSrc,
                setTitle: setTitle
            };

            // Internal data
            var data    = {
                directive: 'cozenAltImage',
                listeners: []
            };
            data.config = testService.getConfig(data.directive, scope, attrs);

            methods.init();

            function init() {

                // Watch for src change to try to change the src
                data.listeners.push(scope.$watch('cozenAltImageSrc', function ($newSrc) {
                    methods.setSrc($newSrc);
                }));

                // Compile the alt image object
                scope.cozenAltImage = scope.$eval(attrs.cozenAltImage);

                // Bind error event
                // Change src and title when an error occurred
                element.bind('error', function () {
                    methods.setSrc(scope.cozenAltImage.src);
                    methods.setTitle(scope.cozenAltImage.title);
                });

                // Listeners
                element.on('$destroy', methods.destroy);
                scope.$on('$destroy', methods.destroy);
            }

            function destroy() {
                element.off('$destroy', methods.destroy);
                angular.forEach(data.listeners, function ($listener) {
                    $listener();
                });
            }

            function setSrc($src) {
                if (!Utils.isNullOrEmpty($src)) {
                    element.attr('src', $src);
                }
            }

            function setTitle($title) {
                if (!Utils.isNullOrEmpty($title)) {
                    element.attr('title', $title);
                }
            }
        }
    }

})(window.angular);