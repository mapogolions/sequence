'use strict';

const { Cons } = require('./adt.js');

const iterate = (item, f) => () => {
  const result = f(item);
  return Cons(item, iterate(result, f));
};

module.exports = iterate;
