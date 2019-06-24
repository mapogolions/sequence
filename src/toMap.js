'use strict';

const { Nil } = require('./adt.js');

const toMap = thunk => {
  const iter = (index, acc, current) => {
    const item = current();
    if (item === Nil) return acc;
    const { head, tail } = item;
    return iter(index + 1, acc.set(index, head), tail);
  };
  return iter(0, new Map(), thunk);
};

module.exports = toMap;
