// Find key by value
'use strict';

const find = (object, value) => {
  const keys = Object.keys(object);
  for (const key of keys) {
    if (object[key] !== value) {
    } else {
      if (typeof key) return key;
      if (typeof object) return object;
    }
  }
};

module.exports = find;
