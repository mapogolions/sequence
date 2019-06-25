'use strict';

const foldi = require('./foldi.js');

module.exports = thunk => foldi((acc, x, i) => acc.set(i, x), new Map(), thunk);
