'use strict';

const {
  isEmpty,
  empty,
  pure,
  cons,
  toArray,
  init,
  take,
  takeWhile,
  repeat,
  repeatedly,
  to,
  until,
  fold,
  unfold,
  append,
  length,
  nth,
  iterate,
  equal,
  iter,
  iteri,
  map,
  mapi,
  filter,
  reduce,
  forAll,
  exists,
  sum,
  max,
  min,
  zipIndex,
  zip,
  drop,
  dropWhile,
  partition,
} = require('../sequence.js');

test('checks if the sequence is empty', () => {
  expect(isEmpty(empty)).toBe(true);
  expect(isEmpty(pure(1))).toBe(false);
  expect(isEmpty(cons(0, empty))).toBe(false);
});

test('cast of a sequence to the array', () => {
  expect(toArray(empty)).toEqual([]);
  expect(toArray(pure(10))).toEqual([10]);
  expect(toArray(init(3, x => x))).toEqual([0, 1, 2]);
});

test('initialization of a sequence by supplier', () => {
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
});

test('repeatedly use result of the function call', () => {
  expect(toArray(take(1, repeatedly(_ => 'bar')))).toEqual(['bar']);
});

test('cast of a infinite recursive structure to the array cause stack overflow', () => {
  expect(() => toArray(repeat('foo'))).toThrowError(RangeError);
  expect(() => toArray(repeatedly(_ => 'bar'))).toThrowError(RangeError);
});

test('range from A to B including', () => {
  expect(toArray(to(2, 2))).toEqual([2]);
  expect(toArray(to(1, 5))).toEqual([1, 2, 3, 4, 5]);
  expect(toArray(to(5, 1))).toEqual([5, 4, 3, 2, 1]);
});

test('range from A to B excluding', () => {
  expect(toArray(until(2, 2))).toEqual([]);
  expect(toArray(until(1, 5))).toEqual([1, 2, 3, 4]);
  expect(toArray(until(5, 1))).toEqual([5, 4, 3, 2]);
});

test('folding recursive data structure', () => {
  expect(fold((seed, x) => seed + x, 100, to(1, 4))).toBe(110);
  expect(fold((seed, x) => [x, ...seed], [], to(1, 3))).toEqual([3, 2, 1]);
});

test('unfolding', () => {
  const f = x => (x < 5 ? { done: false, value: x + 1 } : { done: true });
  expect(toArray(unfold(f, 0))).toEqual([0, 1, 2, 3, 4]);
  expect(toArray(unfold(f, 5))).toEqual([]);
});

test('append one sequence to another', () => {
  expect(toArray(append(empty, empty))).toEqual([]);
  expect(toArray(append(empty, to(1, 2)))).toEqual([1, 2]);
  expect(toArray(append(to(1, 2), empty))).toEqual([1, 2]);
  expect(toArray(append(to(1, 2), to(3, 4)))).toEqual([1, 2, 3, 4]);
});

test('returns the length of sequence', () => {
  expect(length(empty)).toBe(0);
  expect(length(pure(10))).toBe(1);
  expect(length(until(1, 3))).toBe(2);
  expect(length(to(1, 3))).toBe(3);
});

test('obtain nth element of sequence', () => {
  expect(() => nth(-1, to(1, 20))).toThrowError(RangeError);
  expect(nth(0, pure('first'))).toBe('first');
  expect(nth(0, to(1, 5))).toBe(1);
  expect(nth(1, to(1, 5))).toBe(2);
  expect(nth(4, to(1, 5))).toBe(5);
  expect(() => nth(10, to(1, 10))).toThrowError(Error);
});

test('generates infinite sequence by rule', () => {
  expect(toArray(take(5, iterate(1, x => x + 1)))).toEqual([1, 2, 3, 4, 5]);
  expect(toArray(take(3, iterate(0, x => x - 1)))).toEqual([0, -1, -2]);
});

test('checks equality', () => {
  expect(equal(empty, empty)).toBe(true);
  expect(equal(pure(1), pure(1))).toBe(true);
  expect(equal(pure(1), empty)).toBe(false);
  expect(equal(empty, pure(1))).toBe(false);
  expect(equal(take(5, iterate(1, x => x + 1)), to(1, 5))).toBe(true);
});

test('mapping something to something', () => {
  expect(toArray(map(x => x, empty))).toEqual([]);
  expect(toArray(map(x => x.length, pure('foo')))).toEqual([3]);
  expect(toArray(map(x => x.length, init(3, _ => 'bar')))).toEqual([3, 3, 3]);
});

test('mapping something to something with index as argument', () => {
  expect(toArray(mapi((i, x) => i + x, to(-1, 1)))).toEqual([-1, 1, 3]);
  expect(toArray(mapi((i, _) => i, empty))).toEqual([]);
});

test('filter out elements that do not satisfy the predicate', () => {
  expect(toArray(filter(x => x > 0, to(-1, 1)))).toEqual([1]);
  expect(toArray(filter(x => x % 2 === 0, until(1, 10)))).toEqual([2, 4, 6, 8]);
});

test('take elements while the satisfy the predicate', () => {
  expect(toArray(takeWhile(x => x < 0, to(-3, 3)))).toEqual([-3, -2, -1]);
  expect(toArray(takeWhile(x => x > 0, to(3, -3)))).toEqual([3, 2, 1]);
  expect(toArray(takeWhile(x => x > 0, to(-3, 3)))).toEqual([]);
  expect(toArray(takeWhile(x => x < 0, empty))).toEqual([]);
});

test('sum of all elements', () => {
  expect(sum(to(1, 2))).toBe(3);
  expect(sum(to(1, 4))).toBe(10);
  expect(sum(empty)).toBe(0);
});

test('iterate on the iterator', () => {
  const callback = jest.fn(x => x);
  iter(callback, to(1, 3));
  expect(callback.mock.calls.length).toBe(3);
});

test('iterate on the iterator with index as argument', () => {
  const callback = jest.fn((i, _) => i);
  iteri(callback, to(-1, 1));
  expect(callback.mock.calls).toEqual([[0, -1], [1, 0], [2, 1]]);
});

test('reduce of the empty iterator without initial raises error', () => {
  const reduceOfEmptyIterator = () => reduce((acc, x) => acc + x, empty);
  expect(reduceOfEmptyIterator).toThrowError(Error);
});

test('reduce of the empty iterator with initial returns initial', () => {
  expect(reduce((acc, x) => acc + x, empty, 11)).toBe(11);
});

test('reduce of the iterator without initial', () => {
  expect(reduce((acc, x) => acc + x, pure(10))).toBe(10);
  expect(reduce((acc, x) => acc + x, to(1, 2))).toBe(3);
  expect(reduce((acc, x) => acc + x, to(1, 4))).toBe(10);
});

test('reduce of the iterator with initial', () => {
  expect(reduce((acc, x) => acc + x, pure(10), 10)).toBe(20);
  expect(reduce((acc, x) => acc + x, to(1, 2), 100)).toBe(103);
  expect(reduce((acc, x) => acc + x, to(1, 4), 100)).toBe(110);
});

test('checks whether the predicate is true for all elements', () => {
  expect(forAll(x => x < 0, to(-2, 0))).toBe(false);
  expect(forAll(x => x < 0, until(-2, 0))).toBe(true);
  expect(forAll(x => x > 0, empty)).toBe(true);
});

test('checks whether the predicate is true for at least one element', () => {
  expect(exists(x => x < 0, to(3, -1))).toBe(true);
  expect(exists(x => x < 0, until(3, -1))).toBe(false);
  expect(exists(_ => true, empty)).toBe(false);
});

test('maximum element', () => {
  expect(max(to(1, 10))).toBe(10);
  expect(max(to(10, 1))).toBe(10);
  expect(() => max(empty)).toThrowError(Error);
});

test('minimum element', () => {
  expect(min(to(1, 10))).toBe(1);
  expect(min(to(10, 1))).toBe(1);
  expect(() => min(empty)).toThrowError(Error);
});

test('zip elements with their index in the iterator', () => {
  expect(toArray(zipIndex(to(1, 3)))).toEqual([[0, 1], [1, 2], [2, 3]]);
  expect(toArray(zipIndex(empty))).toEqual([]);
});

test('combine common part of thunks', () => {
  expect(toArray(zip(to(1, 2), to(1, 3)))).toEqual([[1, 1], [2, 2]]);
  expect(toArray(zip(to(1, 10), empty))).toEqual([]);
});

test('drop N elements', () => {
  expect(toArray(drop(10, empty))).toEqual([]);
  expect(toArray(drop(0, to(1, 3)))).toEqual([1, 2, 3]);
  expect(toArray(drop(1, to(1, 3)))).toEqual([2, 3]);
  expect(toArray(drop(5, to(1, 3)))).toEqual([]);
});

test('drop elements while they satisfy the predicate', () => {
  expect(toArray(dropWhile(x => x < 0, to(-1, 1)))).toEqual([0, 1]);
  expect(toArray(dropWhile(x => x > 0, to(-1, 1)))).toEqual([-1, 0, 1]);
  expect(toArray(dropWhile(_ => true, empty))).toEqual([]);
  expect(toArray(dropWhile(_ => true, to(-1, 1)))).toEqual([]);
});

test('returns the elements that satisfy the predicate do not satisfy', () => {
  expect(partition(x => x < 0, to(-1, 1)).map(thunk => toArray(thunk))).toEqual(
    [[-1], [0, 1]],
  );
});
