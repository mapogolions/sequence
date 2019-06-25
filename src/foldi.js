'use strict';

const { Nil } = require('./adt.js');

const foldi = (f, seed, thunk) => {
  const iter = (index, acc, current) => {
    const item = current();
    if (item === Nil) return acc;
    const { head, tail } = item;
    return iter(index + 1, f(acc, head, index), tail);
  };
  return iter(0, seed, thunk);
};

module.exports = foldi;
