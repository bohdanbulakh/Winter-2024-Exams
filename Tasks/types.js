// Count types in an array
'use strict';

const countTypes = (array) => {
  const result = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const element of array) {
    result[typeof element]++;
  }
  return result;
};

module.exports = countTypes;
