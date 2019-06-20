'use strict';

const isEmpty = require('./isEmpty.js');

const toArray = thunk => {
  const iter = (acc, current) => {
    if (isEmpty(current)) return acc;
    const { head, tail } = current();
    return iter([...acc, head], tail);
  };
  return iter([], thunk);
};

module.exports = toArray;
