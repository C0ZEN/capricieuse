/**
 * Created by C0ZEN on 26/08/2017.
 */
'use strict';

var Logs = {
    dataMustBeBoolean         : dataMustBeBoolean,
    dataMustBeNumber          : dataMustBeNumber,
    dataMustBeObject          : dataMustBeObject,
    dataMustBeInThisList      : dataMustBeInThisList,
    errorInProvider           : errorInProvider,
    log                       : log,
    log1p                     : log1p,
    warn                      : warn,
    warn1p                    : warn1p,
    error                     : error,
    error1p                   : error1p
};

// Use it to tell the dev that a entered value is not a boolean [Deprecated, use enhancedLogs]
function dataMustBeBoolean($attribute) {
    console.error('%c<%c' + $attribute + '%c> must be <%ctrue%c> or <%cfalse%c>',
        Utils.getConsoleColor(),
        Utils.getConsoleColor('red'),
        Utils.getConsoleColor(),
        Utils.getConsoleColor('purple'),
        Utils.getConsoleColor(),
        Utils.getConsoleColor('purple'),
        Utils.getConsoleColor()
    );
}

// Use it to tell the dev that a entered value is not a number [Deprecated, use enhancedLogs]
function dataMustBeNumber($attribute) {
    console.error('%c<%c' + $attribute + '%c> must be an <%cnumber%c>',
        Utils.getConsoleColor(),
        Utils.getConsoleColor('red'),
        Utils.getConsoleColor(),
        Utils.getConsoleColor('purple'),
        Utils.getConsoleColor()
    );
}

// Use it to tell the dev that a entered value is not an object [Deprecated, use enhancedLogs]
function dataMustBeObject($attribute) {
    console.error('%c<%c' + $attribute + '%c> must be an <%cobject%c>',
        Utils.getConsoleColor(),
        Utils.getConsoleColor('red'),
        Utils.getConsoleColor(),
        Utils.getConsoleColor('purple'),
        Utils.getConsoleColor()
    );
}

// Use it to tell the dev that a key is not in the list so that's a terrible error !! [Deprecated, use enhancedLogs]
function dataMustBeInThisList($attribute, $list) {
    console.error('%c<%c' + $attribute + '%c> must be a correct value from this list <%c' + $list + '%c>',
        Utils.getConsoleColor(),
        Utils.getConsoleColor('red'),
        Utils.getConsoleColor(),
        Utils.getConsoleColor('purple'),
        Utils.getConsoleColor()
    );
}

// Log an error for a provider
function errorInProvider($providerName) {
    console.error('%cError in provider <%c' + $providerName + '%c> !',
        Utils.getConsoleColor(),
        Utils.getConsoleColor('red'),
        Utils.getConsoleColor()
    );
}

// Log
function log($text) {
    console.log('%c' + $text,
        Utils.getConsoleColor()
    );
}

// Log with one parameter
function log1p($before, $param1, $after) {
    if (Utils.isNullOrEmpty($before)) {
        $before = '';
    }
    if (Utils.isNullOrEmpty($after)) {
        $after = '';
    }
    console.log('%c' + $before + ' <%c' + $param1 + '%c> ' + $after,
        Utils.getConsoleColor(),
        Utils.getConsoleColor('red'),
        Utils.getConsoleColor()
    );
}

// Log a warning
function warn($text) {
    console.warn('%c' + $text,
        Utils.getConsoleColor()
    );
}

// Log a warning with one parameter
function warn1p($before, $param1, $after) {
    if (Utils.isNullOrEmpty($before)) {
        $before = '';
    }
    if (Utils.isNullOrEmpty($after)) {
        $after = '';
    }
    console.warn('%c' + $before + ' <%c' + $param1 + '%c> ' + $after,
        Utils.getConsoleColor(),
        Utils.getConsoleColor('red'),
        Utils.getConsoleColor()
    );
}

// Log an error
function error($text) {
    console.error('%c' + $text,
        Utils.getConsoleColor()
    );
}

// Log an error with one parameter
function error1p($before, $param1, $after) {
    if (Utils.isNullOrEmpty($before)) {
        $before = '';
    }
    if (Utils.isNullOrEmpty($after)) {
        $after = '';
    }
    console.error('%c' + $before + ' <%c' + $param1 + '%c> ' + $after,
        Utils.getConsoleColor(),
        Utils.getConsoleColor('red'),
        Utils.getConsoleColor()
    );
}