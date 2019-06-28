'use strict';

const { Nil } = require('./adt.js');

const nth = (index, thunk) => {
  if (index < 0) {
    throw new RangeError('Index out of bounds');
  }
  const iter = (index, current) => {
    const item = current();
    if (item === Nil) {
      throw new RangeError('Index out of bounds');
    }
    const { head, tail } = item;
    if (index <= 0) return head;
    return iter(index - 1, tail);
  };
  return iter(index, thunk);
};

module.exports = nth;
