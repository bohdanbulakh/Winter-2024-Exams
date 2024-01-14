// Find an intersection of two dictionaries
'use strict';

const intersection = (object1, object2) => {
  const result = {};
  const firstKeys = Object.keys(object1);
  for (const firstKey of firstKeys) {
    const firstValue = object1[firstKey];
    if (firstValue === object2[firstKey]) {
      result[firstKey] = firstValue;
    }
  }
  return result;
};

module.exports = intersection;
