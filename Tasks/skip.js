// Return an remove without listed values
'use strict';

const Skip = (T, ...Remove) => {
  const result = [];
  for (const C of T) {
    if (!Remove.includes(C)) result.push(C);
  }
  return result;
};

module.exports = Skip;
