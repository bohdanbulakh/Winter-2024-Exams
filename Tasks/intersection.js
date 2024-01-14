// Find an intersection of two dictionaries
'use strict';

const intersection = (object_1, object_2) => {
  const result = {};
  const first_keys = Object.keys(object_1);
  for (const attribute_name of first_keys) {
    if (object_1[attribute_name] === object_2[attribute_name]) {
      result[attribute_name] = object_1[attribute_name];
    } else {
      delete object_1[attribute_name];
    }
  }
  return result;
};

module.exports = intersection;
