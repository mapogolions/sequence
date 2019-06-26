'use strict';

const { Nil, Cons } = require('./adt.js');

const interleave = (thunk1, thunk2) => () => {
  const item = thunk1();
  if (item === Nil) return thunk2();
  const { head, tail } = item;
  return Cons(head, interleave(thunk2, tail));
};

module.exports = interleave;
