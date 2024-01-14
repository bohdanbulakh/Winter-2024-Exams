// Return an remove without listed values
'use strict';

const Skip = (T, ...Remove) => {
  const result = [];
  for (const C of T) {
    for (const X of Remove) {
      if (C !== X) {
        result.push(C);
      }
    }
  }
  return result;
};

module.exports = Skip;
