'use strict';

const empty = require('./src/empty.js');
const pure = require('./src/pure.js');
const cons = require('./src/cons.js');
const isEmpty = require('./src/isEmpty.js');
const toArray = require('./src/toArray.js');
const toSet = require('./src/toSet.js');
const toMap = require('./src/toMap.js');
const toES6Iterator = require('./src/toES6Iterator.js');
const init = require('./src/init.js');
const take = require('./src/take.js');
const takeWhile = require('./src/takeWhile.js');
const takenth = require('./src/takenth.js');
const repeat = require('./src/repeat.js');
const repeatedly = require('./src/repeatedly.js');
const to = require('./src/to.js');
const until = require('./src/until.js');
const fold = require('./src/fold.js');
const foldi = require('./src/foldi.js');
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
const exists = require('./src/exists.js');
const sum = require('./src/sum.js');
const max = require('./src/max.js');
const min = require('./src/min.js');
const zipIndex = require('./src/zipIndex.js');
const zip = require('./src/zip.js');
const drop = require('./src/drop.js');
const dropWhile = require('./src/dropWhile.js');
const partition = require('./src/partition.js');
const member = require('./src/member.js');
const interleave = require('./src/interleave.js');
const intersperse = require('./src/intersperse.js');
const scan = require('./src/scan.js');
const flatMap = require('./src/flatMap.js');
const cycle = require('./src/cycle.js');
const group = require('./src/group.js');

module.exports = {
  empty,
  pure,
  cons,
  isEmpty,
  toArray,
  toSet,
  toMap,
  toES6Iterator,
  init,
  take,
  takeWhile,
  takenth,
  repeat,
  repeatedly,
  to,
  until,
  fold,
  foldi,
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
  exists,
  sum,
  max,
  min,
  zipIndex,
  zip,
  drop,
  dropWhile,
  partition,
  member,
  interleave,
  intersperse,
  scan,
  flatMap,
  cycle,
  group,
};
