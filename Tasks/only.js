// Copy only listed values from dict
'use strict';

const copyDictValues = (dict, ...keysToCopy) => {
  const result = {};
  const keys = Object.keys(dict);
  for (const key of keys) {
    if (keysToCopy.includes(key)) {
      result[key] = dict[key];
    }
  }
  return result;
};

module.exports = copyDictValues;
