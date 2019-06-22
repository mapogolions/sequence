'use strict';

const { Nil } = require('./adt.js');

const iter = (f, thunk) => {
  const item = thunk();
  if (item === Nil) return;
  const { head, tail } = item;
  f(head);
  iter(f, tail);
};

module.exports = iter;
