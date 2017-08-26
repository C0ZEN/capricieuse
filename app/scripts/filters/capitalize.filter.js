/**
 * Created by C0ZEN on 26/08/2017.
 *
 * @description
 * Transform the text as lowercase and then add uppercase
 * Note: You should use yourText.trim() before calling the filter to avoid unexpected behavior
 *
 */
(function (angular) {
    'use strict';

    angular
        .module('capricieuseApp')
        .filter('capitalize', capitalize);

    function capitalize() {
        return capitalizeFilter;

        function capitalizeFilter(text, all, firstCharOnly) {
            var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
            if (!Utils.isNullOrEmpty(text)) {
                if (firstCharOnly) {
                    text = text.toLowerCase();
                    text = text[0].toUpperCase() + text.slice(1);
                }
                else {

                    // For the case of '-', save each index of the '-' in an array
                    var indexArray = [];
                    for (var i = 0, length = text.length; i < length; i++) {
                        if (text[i] == '-') {
                            indexArray.push(i);
                        }
                    }

                    // Transform the text with all letters capitalized
                    var tmpText = '';
                    text.replace(reg, function (txt) {
                        tmpText += txt[0].toUpperCase() + txt.substr(1).toLowerCase();
                    });
                    text = tmpText;

                    // Add the '-'
                    // indexArray.forEach(function (index) {
                    //     text = Utils.insertIntoString(text, index, '-');
                    // });
                }
                return text;
            }
            else {
                return '';
            }
        }
    }

})(window.angular);

