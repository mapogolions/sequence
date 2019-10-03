'use strict';

const { Cons, Nil } = require('./adt.js');

// (a -> bool) -> 'a t -> 'a t
const filter = (p, thunk) => () => {
  const item = thunk();
  if (item === Nil) return Nil;
  const { head, tail } = item;
  if (p(head)) return Cons(head, filter(p, tail));
  return filter(p, tail)();
};

module.exports = filter;
