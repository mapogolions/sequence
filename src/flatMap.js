'use strict';

const { Nil, Cons } = require('./adt.js');

const flatMap = (f, thunk) => () => {
  const mutualRecursion = (f, current, next) => () => {
    const item = current();
    if (item === Nil) return flatMap(f, next)();
    const { head, tail } = item;
    return Cons(head, mutualRecursion(f, tail, next));
  };
  const item = thunk();
  if (item === Nil) return Nil;
  const { head, tail } = item;
  return mutualRecursion(f, f(head), tail)();
};

module.exports = flatMap;
