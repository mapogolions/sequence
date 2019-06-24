'use strict';

const exists = require('./exists.js');

const member = (eq, a, thunk) => exists(b => eq(a, b), thunk);

module.exports = member;
