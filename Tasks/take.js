// Copy all listed keys from dictionary
'use strict';

const takeKeys = (dict, ...keysToTake) => {
  const result = {};
  const dictKeys = Object.keys(dict);
  for (const key of dictKeys) {
    if (keysToTake.includes(key)) {
      result[key] = dict[key];
    }
  }
  return result;
};

module.exports = takeKeys;
