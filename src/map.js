'use strict';

const { Nil, Cons } = require('./adt.js');

const map = (f, thunk) => () => {
  const item = thunk();
  if (item === Nil) return Nil;
  const { head, tail } = item;
  return Cons(f(head), map(f, tail));
};

module.exports = map;
