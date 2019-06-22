'use strict';

const { Nil } = require('./adt.js');

const equal = (thunk1, thunk2, comparator = compareDefault) => {
  const item1 = thunk1();
  const item2 = thunk2();
  if (item1 === Nil && item2 === Nil) return true;
  if (item1 !== Nil && item2 !== Nil) {
    const { head: h1, tail: t1 } = item1;
    const { head: h2, tail: t2 } = item2;
    return comparator(h1, h2) === 0 ? equal(t1, t2, comparator) : false;
  }
  return false;
};

const compareDefault = (a, b) => {
  if (a === b) return 0;
  if (a < b) return -1;
  return 1;
};

module.exports = equal;
