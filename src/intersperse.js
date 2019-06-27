'use strict';

const { Nil, Cons } = require('./adt.js');
const cons = require('./cons.js');

const intersperse = (x, thunk) => () => {
  const iter = current => () => {
    const item = current();
    if (item === Nil) return Nil;
    const { head, tail } = item;
    return Cons(x, cons(head, iter(tail)));
  };
  const item = thunk();
  if (item === Nil) return Nil;
  const { head, tail } = item;
  return Cons(head, iter(tail));
};

module.exports = intersperse;
