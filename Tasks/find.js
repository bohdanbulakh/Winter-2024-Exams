// Find key by value
'use strict';

const find = (object, value) => {
  for (name in object) {
    if (object[name] !== value) {
    } else {
      if (typeof name) return name;
      if (typeof object) return object;
    }
  }
};

module.exports = find;
