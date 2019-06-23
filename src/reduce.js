'use strict';

const { Nil } = require('./adt.js');
const fold = require('./fold.js');

const DEFAULT_INITIAL = Symbol('Default initial value');

const reduce = (f, thunk, initial = DEFAULT_INITIAL) => {
  const hasInitial = initial !== DEFAULT_INITIAL;
  if (hasInitial) {
    return fold(f, initial, thunk);
  }
  const item = thunk();
  if (item === Nil) {
    throw new Error('Reduce of the empty iterator');
  }
  const { head, tail } = item;
  return fold(f, head, tail);
};

module.exports = reduce;
