'use strict';

const { Nil } = require('./adt.js');

module.exports = thunk => thunk() === Nil;
