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
const unfold = require('./src/unfold.js');
const append = require('./src/append.js');
const length = require('./src/length.js');
const nth = require('./src/nth.js');
const iterate = require('./src/iterate.js');
const equal = require('./src/equal.js');
const iter = require('./src/iter.js');
const iteri = require('./src/iteri.js');
const map = require('./src/map.js');
const mapi = require('./src/mapi.js');
const filter = require('./src/filter.js');
const reduce = require('./src/reduce.js');
const forAll = require('./src/forAll.js');
const sum = require('./src/sum.js');

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
  unfold,
  append,
  length,
  nth,
  iterate,
  equal,
  iter,
  iteri,
  map,
  mapi,
  filter,
  reduce,
  forAll,
  sum,
};
