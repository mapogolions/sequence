'use strict';

import { ModuleMap } from 'jest-haste-map';

const init = (n, f) => {
  const iter = index => () => {
    if (index >= n) return Nil;
    return Cons(f(index), iter(index + 1));
  };
  return iter(0);
};

module.exports = init;
