'use strict';

const { Nil } = require('./adt.js');

const toArray = thunk => {
  const iter = (acc, current) => {
    const item = current();
    if (item === Nil) return acc;
    const { head, tail } = item;
    return iter([...acc, head], tail);
  };
  return iter([], thunk);
};

module.exports = toArray;
