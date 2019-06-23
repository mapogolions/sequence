'use strict';

const { Nil } = require('./adt.js');

const forAll = (p, thunk) => {
  const item = thunk();
  if (item === Nil) return true;
  const { head, tail } = item;
  if (!p(head)) return false;
  return forAll(p, tail);
};

module.exports = forAll;
