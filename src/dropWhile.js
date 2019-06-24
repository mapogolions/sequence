'use strict';

const { Nil } = require('./adt.js');

const dropWhile = (p, thunk) => () => {
  const item = thunk();
  if (item === Nil) return Nil;
  const { head, tail } = item;
  if (!p(head)) return item;
  return dropWhile(p, tail)();
};

module.exports = dropWhile;
