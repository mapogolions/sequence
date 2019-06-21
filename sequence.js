'use strict';

const empty = require('./src/empty.js');
const pure = require('./src/pure.js');
const cons = require('./src/cons.js');
const isEmpty = require('./src/isEmpty.js');
const toArray = require('./src/toArray.js');
const init = require('./src/init.js');
const take = require('./src/take.js');
const takeWhile = require('./src/takeWhile.js');
const repeat = require('./src/repeat.js');
const repeatedly = require('./src/repeatedly.js');
const to = require('./src/to.js');
const until = require('./src/until.js');
const fold = require('./src/fold.js');
const append = require('./src/append.js');
const length = require('./src/length.js');
const nth = require('./src/nth.js');
const iterate = require('./src/iterate.js');

module.exports = {
  empty,
  pure,
  cons,
  isEmpty,
  toArray,
  init,
  take,
  takeWhile,
  repeat,
  repeatedly,
  to,
  until,
  fold,
  append,
  length,
  nth,
  iterate,
};
