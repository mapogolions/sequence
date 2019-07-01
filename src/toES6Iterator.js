'use strict';

const { Nil } = require('./adt.js');

module.exports = function* toES6Iterator(thunk) {
  const item = thunk();
  if (item === Nil) return;
  const { head, tail } = item;
  yield head;
  yield* toES6Iterator(tail);
};
