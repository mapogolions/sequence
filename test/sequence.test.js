'use strict';

const {
  isEmpty,
  empty,
  pure,
  cons,
  toArray,
  init,
  take,
  repeat,
  repeatedly,
} = require('../sequence.js');

test('checks if the sequence is empty', () => {
  expect(isEmpty(empty)).toBe(true);
  expect(isEmpty(pure(1))).toBe(false);
  expect(isEmpty(cons(0, empty))).toBe(false);
});

test('converting an sequence to the array', () => {
  expect(toArray(empty)).toEqual([]);
  expect(toArray(pure(10))).toEqual([10]);
  expect(toArray(init(3, x => x))).toEqual([0, 1, 2]);
});

test('initialization of sequence by supplier', () => {
  expect(toArray(init(4, _ => 100))).toEqual([100, 100, 100, 100]);
  expect(toArray(init(2, i => i + 100))).toEqual([100, 101]);
});

test('take the first N items from a sequence', () => {
  expect(toArray(take(3, init(100, x => x)))).toEqual([0, 1, 2]);
  expect(toArray(take(100, empty))).toEqual([]);
  expect(toArray(take(-10, pure(10)))).toEqual([]);
  expect(toArray(take(1, pure(100)))).toEqual([100]);
});

test('repeat something N times', () => {
  expect(toArray(take(2, repeat('foo')))).toEqual(['foo', 'foo']);
  expect(toArray(take(1, repeatedly(_ => 'bar')))).toEqual(['bar']);
});

test('infinite recursive calls cause stack overflow', () => {
  expect(() => toArray(repeat('foo'))).toThrowError(RangeError);
  expect(() => toArray(repeatedly(_ => 'bar'))).toThrowError(RangeError);
});
