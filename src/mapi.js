'use strict';

const { Nil, Cons } = require('./adt.js');

const mapi = (f, thunk) => {
  const iter = (index, current) => () => {
    const item = current();
    if (item === Nil) return Nil;
    const { head, tail } = item;
    return Cons(f(index, head), iter(index + 1, tail));
  };
  return iter(0, thunk);
};

module.exports = mapi;
