'use strict';

const { Nil, Cons } = require('./adt.js');

const takenth = (n, thunk) => {
  if (n <= 0) {
    throw new Error(/* Some description */);
  }
  const iter = (index, current) => () => {
    const item = current();
    if (item === Nil) return Nil;
    const { head, tail } = item;
    if (index > 0) return iter(index - 1, tail)();
    return Cons(head, iter(n - 1, tail));
  };
  return iter(0, thunk);
};

module.exports = takenth;
