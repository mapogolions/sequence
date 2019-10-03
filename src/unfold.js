'use strict';

const { Nil, Cons } = require('./adt.js');

// ('a -> bool * 'a) -> 'a -> 'a t
const unfold = (f, initial) => () => {
  const { done, value } = f(initial);
  if (done) return Nil;
  return Cons(initial, unfold(f, value));
};

module.exports = unfold;
