// A module for login message and we are going to reuse this
// module in various parts of the applications.

var url = 'http://mylogger.io/log';

// Let's imagine we are going to send a HTTP request to this url. 

function log(message) {
    // Send an HTTP request 
    console.log(message);

    // Raise an event
    
}

// The function and var are scoped to this module or file only. We should
// be able to access it outside the file like app module. So, we need to 
// make it public. 

module.exports.log = log;
// Adding a method called log to this exports object and simply setting it to
// the log function we have defined here in this module. 

//TO export url:
//  module.exports.endPoint = url;

/**
 * * WHEN WE EXPORT URL, WE CALL IT ENDPOINT.
 */

// ---- FROM APP.JS - export only a function ----

/**
 * * Sometimes, we want to export only a function rather than the whole module. For example,
 * * in our logger.js module, we don't need an object because we have a single method. An object 
 * * would be useful if had multiple methods or properties. However, in this case, instead of 
 * * exporting an object, we can export a single function. To export a single funtion:
 */

 module.exports = log;

 // We can reset this exports to the log function. Initially, it was empty object but reset it
 // to just a function.










































































































