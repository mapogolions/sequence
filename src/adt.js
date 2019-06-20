'use strict';

const Nil = Object.freeze({});
const Cons = (head, tail) => Object.freeze({ head, tail });

module.exports = { Nil, Cons };
