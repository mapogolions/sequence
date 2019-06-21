'use strict';

const { Nil } = require('./adt.js');

const fold = (f, seed, thunk) => {
  const item = thunk();
  if (item === Nil) return seed;
  const { head, tail } = item;
  return fold(f, f(seed, head), tail);
};

module.exports = fold;
