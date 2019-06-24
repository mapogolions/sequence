'use strict';

const reduce = require('./reduce.js');

module.exports = thunk => reduce((prev, curr) => Math.max(prev, curr), thunk);
