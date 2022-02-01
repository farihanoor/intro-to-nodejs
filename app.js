/*******************************************/
/************ Lesson 1: Intro **************/
/*******************************************/

/**
** Node js is a open-source and cross platform
** runtime environment for executing JS code 
** outside of a browser.
*/

/* Node is often used to build backend services
also called Api Or Application Programming Interface.
These are the services that power the client applications.
Like- a web app running inside a web browser or a mobile
app running on a mobile device. These client apps are what 
the user sees and interacts with. They are some surfaces 
and they need to communicate with some services, located 
in the server or in the cloud to store data, send email or
push notifications.
*/

/* Node is ideal for building highly scalable, data-intensive
and real-time backend services.
Why use Node?
    => Node is easy to get started. Great for prototyping and agile development
    => Building super-fast and highly scalable services
    => JavaScript everywhere
    => Cleaner and more consistent codebase
    => Largest open-source libs
*/

/*******************************************/
/******* Lesson 2: Node Architecture *******/
/*******************************************/

/* Before node, JS was only run inside browsers. Every browser has a JS engine
build inside of it. For example,
    => Microsoft Engine uses Chakra
    => Firefox uses SpiderMonkey
    => Chrome uses v8 
*/

/* A browser provides a runtime environment for JS code.
 Upto 2009, JS code could only run inside of a browser. In 2009,
 Ryan Dahl thought of executing JS outside of a browser. So, he used
 the fastest engine, v8, Chrome's JS engine and embedded it inside a C++
 program and called it node (node.exe). So, Node is also a runtime environment
 that can execute JS code outside of a browser. It also has certain objects that 
 provide an environment. We can work with the file system, listen for requests and 
 so on. We cannot do that inside of a browser. 
*/

/**
** Node is a program that includes the v8 JS engine 
** and some additional modules that give us capabilities not available 
** inside of a browser. Both node and chrome share the same v8 engine but 
** they provide different runtime environment for JS.
**/

/*******************************************/
/******** Lesson 3: How Node Works *********/
/*******************************************/

/** 
 * Node applications are highly scalable because of
 * * the non-blocking or asynchronous nature of node.  
 * That means a single thread can handle multiple requests.
 * So, when we receive a request from the server, a thread is 
 * allocated to handle that request.
 * In node, we have a single thread to handle all requests. When
 * a request arrives, that single thread is used to handle that 
 * request. If we need to query a database, the thread doesn't have
 * to wait for the database to return the data. While the database is
 * executing the query, that thread will be used to serve another client.
 * When the database prepares the result, it puts a message in a 'Event Queue'. 
 * Node is continuously monitoring this queue in the background. When it finds
 * an event in this queue, it will take it out and process it. This kind of 
 * architecture makes Node ideal for building applications that include a lot 
 * of disk and network access. We can serve more clients without the need to 
 * through in more hardware. That's why node applications are highly-scalable.
 * * In contrast, Node should not be used for CPU-intensive applications like 
 * * video encoding or image manipulation. In these service, there are a lot of 
 * * calculations done by CPU and few operations that touch the file system or 
 * * network. Since node applications are single threaded, when performing a 
 * * calculation to serve one client, other clients have to wait. 
 * * So, Node should only be used for data-intensive and real-time applications. 
 * Another is blocking or synchronous architecture.
 * Suppose, the thread is handling a database query. It may take 
 * time to get the result. So, the thread is sitting idle. It cannot 
 * serve another client. So, when a new request pops up, a new thread 
 * is assigned to serve another client. Now, if we have a large number 
 * of concurrent clients, at some point, we are going to run out of threads. 
 * So, new clients have to wait until free threads are available. And if we 
 * don't want them to wait, then we have to allocate more hardware (server). 
 * With this kind of architecture, we are not utilizing our resources efficiently. 
 * ASP.net use synchronous architecture. But, node is asynchronous by default.  
 * */ 

 function sayHello(name) {
    console.log('Hello, ' + name);
}

sayHello('Fariha');

console.log(window); // undefined
// In node, windows and document objects. These are the runtime environments that
// we get with browser. In node, we have other objects to work with files, OS and network. 

/*******************************************/
/********* Lesson 3: Global Object *********/
/*******************************************/

// Global object -> It means that it is a part of the global scope
// which means we can access it anywhere in any files.
// Other global objects include: 
//      setTimeout() => We use this to call a function after a delay, like 1 sec...
//      clearTimeout() => 
//      setInterval() => We use to call a function repeatedly call a function after a given delay.
//      clearInterval() => We use to stop that function from being called repeatedly.

console.log(); // global object

/* In node, we have a couple of other global objects. In browsers, we have the 'windows' object
that represents the global scope. So, all the variables and functions that are defined globally,
we can access them via the WINDOW object. */

window.console.log('Fariha');
console.log('Fariha');

/* For the second statement, the JS engine will prefix the statement as 'window.console.log()' */
// Also -

var message = '';
//window.message;

/* In Node, we do not have the window object. Instead we have global object. */
global.console.log('Fariha');
// global.setTimeout(() => {  }, timeout);

// However, the variables and function are not scoped to the global object.
// They are only accessible to the local file. They are not available outside of this file. 
// Example-
// global.message => undefined


/*******************************************/
/************ Lesson 4: Modules ************/
/*******************************************/

// for client-side JavaScript
var sayHello = function() {

}

// The function is added to the global scope and 
// it is available via the 'window' object
window.sayHello();

// In real-world, we need to split the code into multiple files
// It is possible that in multiple files, we define the same
// function 'sayHello()'. Because this function is added to the 
// global scope, when we define this in another file, that new 
// definition is going to OVERWRITE the previous definition. This
// is a problem with the global scope. In order to build reliable
// and maintainable apps, we should AVOID defining vars and funcs 
// in the global scope. Instead, we need MODULARITY.

/* We need small building blocks or MODULES where we define our variables
functions so two variables or functions with the same name don't OVERWRITE
another variable or function defined somewhere else that encapsulated inside
of that module. At the core of node, we have the concept called MODULE. So, 
every file in a node application is considered a module. The function and 
variable defined in that module is scoped to that file. In OOP, we say that 
the var and function are private. They are not available outside that module. 
To use the var or func defined in a module outside that module, then you need 
explicitly EXPORT it and make it PUBLIC. 
*/

/**
 * * SUMMARY: Every node application has at least one file or one module which
 * * we call the 'MAIN MODULE'
 * In this case, app.js is our main module.
 */

console.log(module);
 // Here, (module) appears to be a global object but actually it's not.

 // Now, in cmd -> navigate to the module.js file -> run 'node module.js'

 // Result: 

 /* 
 Module {
  id: '.',
  path: 'C:\\Users\\rihan\\Documents\\Mosh\\3) 1 Hour Node By Mosh',
  exports: {},
  filename: 'C:\\Users\\rihan\\Documents\\Mosh\\3) 1 Hour Node By Mosh\\module.js',
  loaded: false,
  children: [],
  paths: [
    'C:\\Users\\rihan\\Documents\\Mosh\\3) 1 Hour Node By Mosh\\node_modules',
    'C:\\Users\\rihan\\Documents\\Mosh\\node_modules',
    'C:\\Users\\rihan\\Documents\\node_modules',
    'C:\\Users\\rihan\\node_modules',
    'C:\\Users\\node_modules',
    'C:\\node_modules'
  ]
}
*/

/* We have an object MODULE; it is a JSON object. The object contains the key-value pair like
id. Every module has an id or a unique identifier. We have exports, parents and the filename ->
the complete path to that file. Loaded -> a boolean which determines whether this module is loaded
or not. We have children and paths. 
*/

/*******************************************/
/******* Lesson 5: Creating a Module *******/
/*******************************************/

/* In the last section, one of the property of MODULE object is 'exports' and 
the exports property is set to an empty object. Anything that we add to this object
will be exported from this module and it will be available outside this module. BACK TO 
THE LOGGER.JS

/*******************************************/
/******* Lesson 6: Loading a Module ********/
/*******************************************/

/* To load a module, we use the REQUIRE() function. This is a function in node that is
not present in the browsers. This function takes one argument and that is the name or path
of the target module that we want to load. 

*/

// Since, logger.js is in the same directory, './' indicated current directory.
require('./logger.js'); 

//OR//

require('./logger');
// Node automatically assumes that the loader module is a JS file. So, you can skip the .js extension

// If the file was in a subfolder
require('./subFolder/logger');

// If the file is in a parent folder
require('..nameOfTheParentFolder/logger');

// The REQUIRE() function returns the object that is exported from this target module. 

var logger = require('./logger.js');

console.log(logger);

// cmd command: node app.js
// cmd return: { log: [Function: log] }

/* We get an object. This object has a single method called log contains 
a function. So, logger.js is imported in this app.js module. Hence, we can
write:
*/
logger.log('Fariha');

/**
 ** SUMMARY: When we define a module, we export one or more members like:
 ** module.exports.log = log
 ** To load a module: we use the require() function. 
 */

/* In the recent version of JS, we can use constants. So, as a best practice 
when loading a module using the require(), it is better to store the result 
in a constant like-
*/

const logger = require('./logger.js');

/* The reason for this is, we don't want to accidentally overwrite the value 
of logger like this here 
    / / logger = 1;
When we call the log method, we will get an exception. 
'Assignment to constant variable.'
*/

// There are tools that csn check JS code for errors like this.
// One of the tools is JSHint.

// cmd command: jshint app.js
// cmd return: line x, col y, Attempting to override 'logger' which is a constant

/**
 * * Sometimes, we want to export only a function rather than the whole module. For example,
 * * * BACK TO THE LOGGER.JS MODULE *
 */

// After the single function export, logger is no longer a module rather a function. 

// Instead of *logger.log('Fariha');*, it will be --
logger('Fariha');


/*******************************************/
/**** Lesson 7: Module Wrapper Function ****/
/*******************************************/

/* Now, we know that the variables and functions defined in a module are scoped to that module.
They are private and not accessible/visible from the outside. Question may arise, how node does this?
*/

/* Make a syntactical error on the very FIRST line of 'logger.js'. The error can be-
    / / var x = ;
Back in the cmd, 
/ / cmd command: node app.js
/ / cmd return: (function (exports, require, module, __filename, __dirname).....)
*/

/* At runtime, the code will be converted to something like this -
(function (exports, require, module, __filename, __dirname) {}
        var url = 'http://mylogger.io/log';
        function log(message) {
             console.log(message);
        }
        module.exports.log = log;
        module.exports = log;
})
*/

/* This is an immediately invoked function expression. So, node doesn't execute our code
directly. It always wraps the code inside each module in something like inside of a function (...)
We call this function 'Module Wrapper Function'
*/

/*  function (exports, require, module, __filename, __dirname)
We have seen the module in module.exports
We have also seen the require function.
For the exports, it is a shortcut to module.exports
Any following code is correct.
*/

module.exports.log = log;
exports.log = log;

// However, we cannot reset the exports like:

exports = log;
// That is because, this 'export' is a reference to module.exports. We cannot
// change that reference. 

/*  function (exports, require, module, __filename, __dirname)
That was the first three arguments. We also have file name and and dirname, which a path to the current file. 
We can find out the filename and dirname like
*/

// underline underline filename
console.log(__filename);
console.log(__dirname);
//run the file in cmd


/*******************************************/
/********** Lesson 8: Path Module **********/
/*******************************************/

/* We have some useful module built into the core of node. With these modules, we can work with
files, OS, network and so on. To know more about the built in modules,
go to nodejs.org--->docs--.on the left go to the latest stable version (16.13.2). In the table of contents
the list is the list of built-in modules in node. Some useful modules are-

File System -> To work with file.
HTTP -> We can create web servers that listen for HTTP request.
OS ->  To work with the OS
Path -> Gives us a bunch of utility function for working with paths. 
Process -> Gives us information about the current process. 
Query Strings -> Very useful in building HTTP services.
Stream -> Allows us to work with stream of data. 
*/

// If you navigate to path, we can see all the functions in the 'Path' module. Scroll down to see, how to use each function

const path = require('path');
// At first, node assumes that this is a built-in module. If there is no built-in file by the name specified here, then node looks for relative path of a 
// file in this application. So, we write './filename' or '..dirname'
// Here, path is an object with a bunch of useful methods. 

var pathObj = path.parse(__filename);
console.log(pathObj);

// run cmd : node app.js
/* cmd returns: an object
{ root: '/',
dir:'/Users/.../.../...',
base: 'app.js',
ext: '.js', // extension
name: 'app' } //filename without extension
*/ 

/*******************************************/
/*********** Lesson 9: OS Module ***********/
/*******************************************/

// Loading the built-in 'OS' module
const os = require('os');
// The require() function takes in the name of the module to be loaded.
// The returned object is stored in the variable os of type const. Const 
// will prevent from overloading the variable.

// The OS module has been imported. To see all the available functions, type 'os.'

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory: ' + totalMemory);

// We can simplify this expression by using:
// Template string, available to the most recent versions of JS like-
// ES6 OR ES2015: ECMAScript 6 
// Some browsers update that JS engine according to the ES6.
// Node on the other hand uses V8 engine and is pretty upto date and it implements a lot 
// of new features of JS defined by ES6.

// In ES6, we have a new feature called 'template string' which helps to build strings 
// without concatenation.

console.log(`Total Memory: ${totalMemory}`);

// Instead of single quote, we use back tick character. It is the key before '1' in the keyboard. 
// To store the value dynamically, we put $ sign and curly places to create a placeholder for the 
// argument. In this case, the argument is 'totalMemory' variable. 

console.log(`Free Memory: ${freeMemory}`);

// run cmd: node app.js
// cmd returns: Total Memory: 34359738368
//              Free Memory: 10274578432


/*******************************************/
/****** Lesson 10: File System Module ******/
/*******************************************/

// load the File system module
const fs = require('fs');

/* Almost every operation defined in this modules comes in two forms:
    i) Synchronous or blocking. Example: access, appendFile, ...
    ii) Asynchronous or non-blocking. Example: accessSync, appendFileSync, ... 
*/

// Avoid using Sync methods because they are there purely for simplicity. In real world applications,
// you should use asynchronous methods because these are non-blocking. Node process has a single thread.
// If you are using node to build backend, you might several clients connecting to the backend. If that 
// single thread is busy all the time, then you won't be able to serve many clients.
// So, ALWAYS use asynchronous methods.

// Synchronous form
// Reads the files of current directory.
const files = fs.readdirSync('./'); 
// The argument is the path.
// './' represents the current folder
// Returns all the files and folders in the current folder.
// The var 'files' will be a string array.
console.log(files);

// Run cmd -> node app.js
// cmd returns ~> [ '.git', 'app.js', 'logger.js' ]


// Asynchronous Form
fs.readdir('./', function(err, files){
    if (err) console.log('Error', err);
    else console.log('Result', files);
});
// Similar to sync, the first argument is the path. In this case, the current folder.
/**
 * * All asynchronous methods take a function as their last argument. Node will call this function when that 
 * * asynchronous operation completes. We call this function a *CALLBACK*. 
 * * The callback function has two parameters.
 * * a) An error; b) A result
 * * Only one of them will have a value and the other will be null.
 */

// Run cmd -> node app.js
// cmd returns ~> [ '.git', 'app.js', 'logger.js' ]

// Simulating an error
// Asynchronous Form
fs.readdir('$', function(err, files){
    if (err) console.log('Error', err);
    else console.log('Result', files);
});

// Changed the path to a '$' sign.

// Run cmd -> node app.js
// cmd returns ~> No such file or directory

/*******************************************/
/********* Lesson 11: Event Module *********/
/*******************************************/

// One of the core concepts in node is the concept of EVENTS.

/**
 * * Event -> An event is basically a signal that indicates that something has happened in our application.
 */

// In node, we have a class called HTTP that is used to build a web server. So, we 
// listen on a given port and every time we receive a request on that port, HTTP class
// raises an event. Our job is to RESPOND to that event which basically involves reading
// that request and returning the right response. Different classes in node raises 
// different kinds of events.

// Back in nodejs.org -> doc -> Events module
// In Event module we have one class called 'EventEmitter'. It is one of the core building blocks of node.
// First load the events module.

const EventEmitter = require('events');

// Here, when we call the require function, we get the EventEmitter class. 
// Note, the word 'EventEmitter' is in Pascal-Case and not Camel-Case. This indicates 
// that EventEmitter is not a function, not a variable but a CLASS. A Class is a container
// for a bunch of related properties and functions which we call methods. 

// In order to use this EventEmitter, we need to create an instance of this class.

const emitter = new EventEmitter();

// Here, 'emitter' is an object. 
// A class defines the properties and behavior of a concept, like Human.
// An object is an actual instance of that class. 

// emit() is used to raise an event; signalling an event has happened.
emitter.emit('messageLogged'); 
// Pass an argument which is the name of the event.
// Every time we log a message, we are going to raise an event called 'messageLogged'.
// If we emit an event, we need a listener as well.
// So, if we run this code, nothing happens. That is because nowhere in tha application, we 
// have registered a listener that is interested in that event. 

/**
 ** A listener is a function that will be called when that event is raised.
*/

// Register a listener
emitter.on('messageLogged', function() {
    console.log('Listener called');
});
// Takes in two arguments.
// a) Name of the event; b) callback function, the actual function

// Run cmd -> node app.js
// cmd returns ~> Listener called
emitter.emit('messageLogged');
// The emit should come after a listener.
// This indicates that when we raise this event, the callback function or the listener 
// was called.

/* The order of listener, emitter is important here. the listener has to come before the emitter. If we register the listener after the 
emit method, nothing would have happened because when call the emit() method, this emitter iterates over all the registered listeners
and calls them synchronously. 
*/

/*******************************************/
/******** Lesson 11: Event Arguments *******/
/*******************************************/

// Quite often, when we want to raise an event, we also want to send some data about that event. For example,

// When raising an event, we can add additional arguments which we refer to as event arguments.
emitter.emit('messageLogged', 1, 'url');
// We can add an id such as 1, we can add url. 
// But this is not very useful. To make it more understandable, it is better
// to encapsulate those values inside an object like a key-value pair.
// Template: { key1: value1, key2: value2}
// We refer to this object as 'event argument'. 
emitter.emit('messageLogged', { id: 1, url: 'http//' });

// When registering a listener here, the callback function can also receive the 'event argument'.
// Register a listener
emitter.on('messageLogged', function(eventArg) { // you can use arg, e, eventArg
    console.log('Listener called', eventArg);
});

// Converting to an arrow function 
// Get rid of the 'function' keyword
// Put => between the body
emitter.on('messageLogged', (eventArg) => { // you can use arg, e, eventArg
    console.log('Listener called', eventArg);
});

// Raising an event
emitter.emit('messageLogged', { id: 1, url: 'http//' });
// Always remember, listener comes before emitter.

// Run cmd -> node app.js
// cmd returns ~> Listener called { id: 1, url: 'http://' }

// With this technique, we can pass data about the event that just happened. 

// Task
// Raise: logging (data: message)
emitter.on('logging', () => { // you can use arg, e, eventArg
    console.log('Listener called');
});

// Raising an event
emitter.emit('logging');

/*******************************************/
/**** Lesson 12: Extending EventEmitter ****/
/*******************************************/

// In real-world applications, it is unlikely that you would work with
// 'emitter' object directly. Instead you want create a class, that has all the
// capabilities of the EventEmitter and then use that class.
// Go to logger2.js module. 

// Here, Logger is a class.
const Logger = require('./logger2.js');
const logger = new Logger();

// Register a Listener
logger.on('messageLogged', () => { // you can use arg, e, eventArg
    console.log('Listener called');
});

// Here, the 'log()' function works like an emit()
logger.log('message');


/*******************************************/
/********* Lesson 12: HTTP Module **********/
/*******************************************/










