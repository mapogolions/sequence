'use strict';

const { Nil } = require('./adt.js');

const toSet = thunk => {
  const iter = (acc, current) => {
    const item = current();
    if (item === Nil) return acc;
    const { head, tail } = item;
    return iter(acc.add(head), tail);
  };
  return iter(new Set(), thunk);
};

module.exports = toSet;
