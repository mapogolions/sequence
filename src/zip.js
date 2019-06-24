'use strict';

const { Nil, Cons } = require('./adt.js');

const zip = (thunk1, thunk2) => () => {
  const item1 = thunk1();
  const item2 = thunk2();
  if (item1 === Nil || item2 === Nil) return Nil;
  const { head: h1, tail: t1 } = item1;
  const { head: h2, tail: t2 } = item2;
  return Cons([h1, h2], zip(t1, t2));
};

module.exports = zip;
