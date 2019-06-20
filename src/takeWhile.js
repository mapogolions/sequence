'use strict';

const { Cons, Nil } = require('./adt.js');
const isEmpty = require('./isEmpty.js');

const takeWhile = (p, thunk) => () => {
  if (isEmpty(thunk)) return Nil;
  const { head, tail } = thunk();
  if (!p(head)) return Nil;
  return Cons(head, takeWhile(p, tail));
};

module.exports = takeWhile;
