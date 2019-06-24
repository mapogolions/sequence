'use strict';

const { Nil } = require('./adt.js');

const exists = (p, thunk) => {
  const item = thunk();
  if (item === Nil) return false;
  const { head, tail } = item;
  if (p(head)) return true;
  return exists(p, tail);
};

module.exports = exists;
