// Filter array by type name
'use strict';

const Filter = (T, t) => {
  const result = [];
  for (const C of T) {
    const x = T.indexOf(C);
    if (typeof T[x] === t) {
      result.push(C);
    }
  }
  return result;
};

module.exports = Filter;
