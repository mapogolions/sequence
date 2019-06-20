'use strict';

const { Cons } = require('./adt.js');

const repeatedly = f => () => Cons(f(), repeatedly(f));

module.exports = repeatedly;
