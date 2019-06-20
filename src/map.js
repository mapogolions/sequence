'use strict';

const { Nil, Cons } = require('./adt.js');
const isEmpty = require('./isEmpty.js');

const map = (f, thunk) => () => {
  if (isEmpty(thunk)) return Nil;
  const { head, tail } = thunk();
  return Cons(f(head), map(f, tail));
};

module.exports = map;
