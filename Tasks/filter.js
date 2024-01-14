// Filter array by type name
'use strict';

const Filter = (T, t) => {
  const result = [];
  for (const C of T) {
    if (typeof C === t) result.push(C);
  }
  return result;
};

module.exports = Filter;
