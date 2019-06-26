'use strict';

const { Nil, Cons } = require('./adt.js');

const scan = (f, seed, thunk) => () => {
  const item = thunk();
  if (item === Nil) return Nil;
  const { head, tail } = item;
  const result = f(seed, head);
  return Cons(result, scan(f, result, tail));
};

module.exports = scan;
