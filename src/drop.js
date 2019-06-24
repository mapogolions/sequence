'use strict';

const { Nil } = require('./adt.js');

const drop = (n, thunk) => () => {
  if (n <= 0) return thunk();
  const item = thunk();
  if (item === Nil) return Nil;
  const { tail } = item;
  return drop(n - 1, tail)();
};

module.exports = drop;
