'use strict';

const { Nil, Cons } = require('./adt.js');
const cons = require('./cons.js');
const takeWhile = require('./takeWhile.js');
const dropWhile = require('./dropWhile.js');

const group = (eq, thunk) => () => {
  const item = thunk();
  if (item === Nil) return Nil;
  const { head, tail } = item;
  const grouped = cons(head, takeWhile(x => eq(x, head), tail));
  const afterSkipped = dropWhile(x => eq(x, head), tail);
  return Cons(grouped, group(eq, afterSkipped));
};

module.exports = group;
