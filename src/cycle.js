'use strict';

const append = require('./append.js');

const cycle = thunk => () => append(thunk, cycle(thunk))();

module.exports = cycle;
