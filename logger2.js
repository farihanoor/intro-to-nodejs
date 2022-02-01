// Import the EventEmitter class
const EventEmitter = require('events');
// We do not need the emitter object because we didn't use it anywhere in the code.
// const emitter = new EventEmitter();


// Here the emitter object is different from the emitter object of app.js.
// So,we will create a class 

// The first letter of every word in a class should be uppercase.
// We want the Logger class to have all the capabilities of a EventEmitter class.
// So, we will extend the EventEmitter class.
// Template: class <ClassName> extends <ParentClass>
// Now, the 'Logger' class will have all the functionalities of the EventEmitter class.
class Logger extends EventEmitter {
    // The 'function' keyword inside the class gives an error.
    // No need to write function keyword and refer to the function as 'methods'.
    // function log(message) // gives error {
    log(message) {
        // Send an HTTP request 
        console.log(message);
    
        // Raise an event
        // emitter.emit('messageLogger', { id: 1, url: 'http:// ' });
        // Instead of using the 'emitter' object, we are going to use 'this' keyword.
        this.emit('messageLogger', { id: 1, url: 'http:// ' });
        // 'this' references the Logger class itself. 
        // In this class, we can directly emit or raise events without the need for an object.   
    }
}

// Instead of exporting the 'log' function, we want to export the 'Logger' class.
module.exports = Logger;

