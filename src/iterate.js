'use strict';

const { Cons } = require('./adt.js');

const iterate = (item, f) => () => {
  return Cons(item, iterate(f(item), f));
};

module.exports = iterate;
