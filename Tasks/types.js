// Count types in an array
'use strict';

const types = (s) => {
  const types_ = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const i of s) {
    types_[typeof i]++;
  }
  return types_;
};

module.exports = types;
