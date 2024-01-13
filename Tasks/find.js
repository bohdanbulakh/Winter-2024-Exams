// Find key by value
'use strict';

const findKey = (object, value) => {
  const keys = Object.keys(object);
  for (const key of keys) {
    if (object[key] === value) return key;
  }
};

module.exports = findKey;
