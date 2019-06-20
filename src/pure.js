'use strict';

const cons = require('./cons.js');
const empty = require('./empty.js');

module.exports = item => cons(item, empty);
