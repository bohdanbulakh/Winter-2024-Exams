// Copy only listed values from dict
'use strict';

const only = (W, ...only) => {
  const result = {};
  const X = Object.keys(W);
  for (const Z of X) {
    if (only.includes(Z)) {
      result[Z] = W[Z];
    }
  }
  return result;
};

module.exports = only;
