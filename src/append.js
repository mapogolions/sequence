'use strict';

const { Cons, Nil } = require('./adt.js');
const isEmpty = require('./isEmpty.js');

const append = (thunk1, thunk2) => () => {
  if (isEmpty(thunk1)) return thunk2();
  const { head, tail } = thunk1();
  return Cons(head, append(tail, thunk2));
};

module.exports = append;
