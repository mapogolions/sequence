'use strict';

const isEmpty = require('../src/isEmpty.js');
const empty = require('../src/empty.js');
const pure = require('../src/pure.js');
const cons = require('../src/cons.js');

test('checks if the sequence is empty', () => {
  expect(isEmpty(empty)).toBe(true);
  expect(isEmpty(pure(1))).toBe(false);
  expect(isEmpty(cons(0, empty))).toBe(false);
});
