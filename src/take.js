'use strict';

const { Nil, Cons } = require('./adt.js');

const take = (n, thunk) => () => {
  if (n <= 0) return Nil;
  const item = thunk();
  if (item === Nil) return Nil;
  const { head, tail } = item;
  return Cons(head, take(n - 1, tail));
};

module.exports = take;
