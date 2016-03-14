#!/usr/bin/env node

/**
 * Node entry-point to launch the simple server.
 *
 * Server file is located in `src/server.js` it is written in ES6 so,
 * it will be live transpiled by babel.
 */

var path = require('path');
var fs = require('fs');

var babelrcPath = path.resolve(path.join(__dirname, '..', '.babelrc'));

/**
 * Try to parse the .babelrc file and register the babel transpiler
 */
try {
  var babelrc = fs.readFileSync(babelrcPath);
  var config = JSON.parse(babelrc);
  require('babel-register')(config);
} catch (err) {
  console.error('==>     ERROR: Error parsing your .babelrc.');
  console.error(err);
}

/**
 * Called when the node process is about to exit
 *
 * @param number code Return code of the process
 */
function onExit(code) {
  if (code !== 0) {
    console.info('==>   EXIT: Non-zero exit code of %s', code);
  } else {
    console.info('==>   EXIT: Server is exiting normally');
  }
}
process.on('exit', onExit);

/**
 * Called when the user hits Ctrl-C
 */
function onCtrlC() {
  console.info('==>   EXIT: Ctrl-C has been captured');
  process.exit(0);
}
process.on('SIGINT', onCtrlC);

/**
 * Called when an uncaught exception is thrown.
 * The server is wrapped in a try catch, that will throw it's error
 * to be caught here
 *
 * @param object err  Error object
 */
function onUncaughtException(err) {
  console.error('==>    ERROR: An exception has been thrown');
  console.error(err.stack);
  process.exit(1);
}
process.on('uncaughtException', onUncaughtException);

/**
 * Attempt to launch the server
 * catch and throw any errors
 */
try {
  require('../src/server');
} catch (err) {
  console.error('==>    ERROR: Error has been encountered in the server script');
  throw err;
}
