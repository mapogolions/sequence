'use strict';

const { Cons, Nil } = require('./adt.js');

const until = (start, end) => () => {
  if (start === end) return Nil;
  if (start < end) return Cons(start, until(start + 1, end));
  return Cons(start, until(start - 1, end));
};

module.exports = until;
