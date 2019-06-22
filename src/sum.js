'use strict';

const fold = require('./fold.js');

module.exports = thunk => fold((seed, x) => seed + x, 0, thunk);
