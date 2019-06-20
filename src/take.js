'use strict';

const isEmpty = require('./isEmpty.js');
const { Nil, Cons } = require('./adt.js');

const take = (n, thunk) => () => {
  if (n <= 0 || isEmpty(thunk)) return Nil;
  const { head, tail } = thunk();
  return Cons(head, take(n - 1, tail));
};

module.exports = take;
