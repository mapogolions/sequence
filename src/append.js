'use strict';

const { Cons, Nil } = require('./adt.js');

const append = (thunk1, thunk2) => () => {
  const item = thunk1();
  if (item === Nil) return thunk2();
  const { head, tail } = item;
  return Cons(head, append(tail, thunk2));
};

module.exports = append;
