'use strict';

const fold = require('./fold.js');

module.exports = thunk => fold((seed, _) => seed + 1, 0, thunk);
