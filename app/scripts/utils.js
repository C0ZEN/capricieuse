/**
 * Created by C0ZEN on 26/08/2017.
 */
'use strict';

var Utils = {
    isInList                  : isInList,
    isNullOrEmpty             : isNullOrEmpty,
    isNullOrEmptyStrict       : isNullOrEmptyStrict,
    safeApply                 : safeApply,
    isFunction                : isFunction,
    getConsoleColor           : getConsoleColor,
    capitalizeFirstLetter     : capitalizeFirstLetter,
    isRegExpValid             : isRegExpValid,
    getElementPaddingTopBottom: getElementPaddingTopBottom,
    hasOwnProperty            : hasOwnProperty,
    hasDuplicates             : hasDuplicates,
    getLongestKey             : getLongestKey,
    returnSpacesString        : returnSpacesString,
    getRandomFromRange        : getRandomFromRange,
    getRandomBoolean          : getRandomBoolean,
    getHumanFileSize          : getHumanFileSize,
    getNumberArray            : getNumberArray,
    isBoolean                 : isBoolean,
    isString                  : isString
};

// Common data
var Data = {
    red   : '#c0392b',
    purple: '#8e44ad',
    black : '#2c3e50',
    orange: '#d35400',
    green : '#27ae60'
};

// Check if a value is in the list
function isInList($list, $value) {
    return $list.indexOf($value) != -1;
}

// Check if a value is null, empty or undefined
function isNullOrEmpty($element) {
    return $element == null || $element == '' || $element == 'undefined';

}

// Check if a value is null, empty or undefined
function isNullOrEmptyStrict($element) {
    return $element === null || $element === '' || $element === 'undefined';
}

// Force a digest in angular app safely
function safeApply($scope, $fn) {
    var phase = $scope.$root;
    if (!isNullOrEmpty(phase)) {
        phase = phase.$$phase;
        if (phase == '$apply' || phase == '$digest') {
            if ($fn && (typeof ($fn) === 'function')) {
                $fn();
            }
        }
        else {
            $scope.$apply($fn);
        }
    }
}

// Check if the function is a real function
function isFunction($fn) {
    return typeof $fn === 'function';
}

// Just a function to get access of the colors for the console
function getConsoleColor($type) {
    var color = 'color:';
    switch ($type) {
        case 'red':
        case 'directive':
            return color + Data.red;
        case 'purple':
        case 'fn':
            return color + Data.purple;
        case 'orange':
        case 'time':
            return color + Data.orange;
        case 'green':
            return color + Data.green;
        default:
            return color + Data.black;
    }
}

// Capitalize only the first letter of a string
function capitalizeFirstLetter($string) {
    if (Methods.isNullOrEmpty($string) || typeof $string != 'string') {
        return $string;
    }
    return $string.charAt(0).toUpperCase() + $string.slice(1);
}

// Check if the regexp is valid
function isRegExpValid($regexp, $value) {
    return !(!new RegExp($regexp).test($value) || isNullOrEmpty($value));
}

function getElementPaddingTopBottom($element) {
    var styles = window.getComputedStyle($element);
    return parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom);
}

// Check if an object have a property to avoid using not own property
function hasOwnProperty($obj, $prop) {
    if (isNullOrEmpty($obj) || isNullOrEmpty($prop)) {
        return false;
    }
    var proto = $obj.__proto__ || $obj.constructor.prototype;
    return ($prop in $obj) &&
        (!($prop in proto) || proto[$prop] !== $obj[$prop]);
}

// Check if an array have duplicated keys
function hasDuplicates($array) {
    return (new Set($array)).size !== $array.length;
}

// Return the longest of an object
function getLongestKey($object) {
    var longest = '';
    for (var key in $object) {
        if (key.length > longest.length) {
            longest = key;
        }
    }
    return longest;
}

// Return a string filled with spaces
// The spaces quantity is defined by checking the difference between the key length and a max length
function returnSpacesString($key, $maxLength) {
    var diff = $maxLength - $key.length;
    var text = '';
    for (var i = 0; i < diff; i++) {
        text += ' ';
    }
    return text;
}

// Return a random number from a range (both included)
function getRandomFromRange($min, $max) {
    $min = Math.ceil($min);
    $max = Math.floor($max);
    return Math.floor(Math.random() * ($max - $min + 1)) + $min;
}

// Return true or false randomly
function getRandomBoolean() {
    var boolean = getRandomFromRange(0, 1);
    return boolean == 1;
}

// Return a human readable size in bytes
function getHumanFileSize($bytes, $si) {
    var thresh = $si ? 1000 : 1024;
    if (Math.abs($bytes) < thresh) {
        return $bytes + ' B';
    }
    var units = $si ? [
        'KB',
        'MB',
        'GB',
        'TB',
        'PB',
        'EB',
        'ZB',
        'YB'
    ] : [
        'KiB',
        'MiB',
        'GiB',
        'TiB',
        'PiB',
        'EiB',
        'ZiB',
        'YiB'
    ];
    var u     = -1;
    do {
        $bytes /= thresh;
        ++u;
    } while (Math.abs(bytes) >= thresh && u < units.length - 1);
    return bytes.toFixed(1) + ' ' + units[u];
}

// Return an empty array of desired size
function getNumberArray($number) {
    if (!Methods.isNullOrEmpty($number) && typeof $number == 'number') {
        return new Array($number);
    }
    return [];
}

// Check if the value is a boolean
function isBoolean($value) {
    return typeof $value === 'boolean';
}

// Check if the value is a string
function isString($value) {
    return typeof $value === 'string';
}