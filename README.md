## Purely functional iterators

[![Build Status](https://travis-ci.org/mapogolions/sequence.svg?branch=master)](https://travis-ci.org/mapogolions/sequence) [![Coverage Status](https://coveralls.io/repos/github/mapogolions/sequence/badge.svg?branch=master)](https://coveralls.io/github/mapogolions/sequence?branch=master) [![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](./LICENSE.txt)


### Introduction

Suppose we wanted to represent the sequence of all natural numbers. It is a kind of infinite mathematical object that needs to be represented with a finite data structure.
Some of the obvious things we might try simply don't work.

```javascript
function from(start) {
  return [start, ...nums(start + 1)]; // isn't tailrec
}
const nats = from(0);
// Stack overflow
```

```javascript
function from(start) {
  const iter = (acc, n) => {
    acc.push(n);
    retrun iter(acc, n + 1); // tailrec
  };
  return iter([], start);
}
const nats = from(0);
// Infinite loop
```

The problem with the first attempt is that `nats` attempts to compute the entire infinite sequence of natural numbers. Because the function isn't tail recursive, it quickly overflows the stack. If it were tail recursive, it would go into an infinite loop.

We can use the property of evaluation — that functions delay evaluation. A function that is used just to delay computation, and in particular one that takes `undefined` as input, is called a `thunk`.

**// Todo add code**


### How to use

```sh
$ git clone ...
$ cd project
$ npm i
$ npm run test
```

### I have more questions!

That is great! For more details see:
  * [Streams and Laziness](https://www.cs.cornell.edu/courses/cs3110/2018sp/l/12-streams/notes.html)
  * [OSeq](https://github.com/c-cube/oseq/tree/master)
