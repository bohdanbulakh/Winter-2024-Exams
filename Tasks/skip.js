// Return an remove without listed values
'use strict';

const skipValues = (array, ...valuesToSkip) => {
  const result = [];
  for (const value of array) {
    if (!valuesToSkip.includes(value)) result.push(value);
  }
  return result;
};

module.exports = skipValues;
