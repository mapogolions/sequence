## Purely functional iterators

[![Build Status](https://travis-ci.org/mapogolions/sequence.svg?branch=master)](https://travis-ci.org/mapogolions/sequence) [![Coverage Status](https://coveralls.io/repos/github/mapogolions/sequence/badge.svg?branch=master)](https://coveralls.io/github/mapogolions/sequence?branch=master) [![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](./LICENSE.txt)

### Please keep in mind that:

* Disgusting performance. Implementation based on recursive algorithms has done its job. Stack overflow problem.
* Modern javascript provides many cool features to implement infinite mathematical objects with a finite data structure. For instance, iterators, generator, closure.

```javascript
// generator
function* nats(n) {
  while (true) yield n++;
}
// closure
function nats(n) {
  return () => n++;
}
// iterator
function nats(n) {
  return {
    [Symbol.iterator]() { return this; },
    next() {
      return { done: false, value: n++ };
    } 
  };
};
```

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
