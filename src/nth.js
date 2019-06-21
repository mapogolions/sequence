'use strict';

const isEmpty = require('./isEmpty.js');

const nth = (index, thunk) => {
  if (index < 0) {
    throw new RangeError('Index out of bounds');
  }
  const iter = (index, current) => {
    if (isEmpty(current)) {
      throw new Error('Not found');
    }
    const { head, tail } = current();
    if (index <= 0) return head;
    return iter(index - 1, tail);
  };
  return iter(index, thunk);
};

module.exports = nth;
