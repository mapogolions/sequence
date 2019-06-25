'use strict';

const fold = require('./fold.js');

module.exports = thunk => fold((acc, x) => acc.add(x), new Set(), thunk);
