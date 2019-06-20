'use strict';

const { Cons } = require('./adt.js');

module.exports = (head, tail) => () => Cons(head, tail);
