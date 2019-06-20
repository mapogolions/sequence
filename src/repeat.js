'use strict';

const { Cons } = require('./adt.js');

const repeat = item => () => Cons(item, repeat(item));

module.exports = repeat;
