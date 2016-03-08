#!/usr/bin/env node

var path = require('path');
var fs = require('fs');

var babelrcPath = path.resolve(path.join(__dirname, '..', '.babelrc'));
var babelrc;
var config;

try {
  babelrc = fs.readFileSync(babelrcPath);
  config = JSON.parse(babelrc);
} catch (err) {
  console.error('==>     ERROR: Error parsing your .babelrc.');
  console.error(err);
}

require('babel-register')(config);

process.on('exit', function (code) {
  if (code !== 0) {
    console.info('==>   EXIT: Non-zero exit code of %s', code);
  } else {
    console.info('==>   EXIT: Server is exiting normally');
  }
});

process.on('SIGINT', function () {
  console.info('==>   EXIT: Ctrl-C has been captured');
  process.exit(0);
});

process.on('uncaughtException', function (err) {
  console.error('==>    ERROR: An exception has been thrown');
  console.error(err.stack);
  process.exit(1);
});

try {
  require('../src/server');
} catch (err) {
  console.error('==>    ERROR: Error has been encountered in the server script');
  throw err;
}
