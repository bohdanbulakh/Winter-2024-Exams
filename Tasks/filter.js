// Filter array by type name
'use strict';

const filterByType = (array, typeName) => {
  const result = [];
  for (const element of array) {
    if (typeof element === typeName) result.push(element);
  }
  return result;
};

module.exports = filterByType;
