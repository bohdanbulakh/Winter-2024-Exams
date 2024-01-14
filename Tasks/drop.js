// Delete listed keys from dictionary
'use strict';

const dropKeys = (dict, ...keysToRemove) => {
  const result = {};
  const keys = Object.keys(dict);
  for (const key of keys) {
    if (!keysToRemove.includes(key)) {
      result[key] = dict[key];
    }
  }
  return result;
};

module.exports = dropKeys;
