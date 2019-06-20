'use strict';

const { Cons, Nil } = require('./adt.js');
const empty = require('./empty.js');

const to = (start, end) => () => {
  if (start == end) return Cons(start, empty);
  if (start < end) return Cons(start, to(start + 1, end));
  return Cons(start, to(start - 1, end));
};

module.exports = to;
