'use strict';

const { Cons, Nil } = require('./adt.js');
const isEmpty = require('./isEmpty.js');

const fold = (f, seed, thunk) => {
  if (isEmpty(thunk)) return seed;
  const { head, tail } = thunk();
  return fold(f, f(seed, head), tail);
};

module.exports = fold;
