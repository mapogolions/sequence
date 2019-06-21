'use strict';

const { Cons, Nil } = require('./adt.js');

const takeWhile = (p, thunk) => () => {
  const item = thunk();
  if (item === Nil) return Nil;
  const { head, tail } = item;
  if (!p(head)) return Nil;
  return Cons(head, takeWhile(p, tail));
};

module.exports = takeWhile;
