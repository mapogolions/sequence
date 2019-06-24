'use strict';

const filter = require('./filter.js');

module.exports = (p, thunk) => [filter(p, thunk), filter(x => !p(x), thunk)];
