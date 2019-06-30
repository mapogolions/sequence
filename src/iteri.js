'use strict';

const { Nil } = require('./adt.js');

const iteri = (f, thunk) => {
  const rec = (index, current) => {
    const item = current();
    if (item === Nil) return;
    const { head, tail } = item;
    f(head, index);
    rec(index + 1, tail);
  };
  return rec(0, thunk);
};

module.exports = iteri;
