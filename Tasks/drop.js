// Delete listed keys from dictionary
'use strict';

const DroP = (D, ...X) => {
  const result = {};
  const T = Object.keys(D);
  for (const _ of T) {
    if (!X.includes(_)) {
      result[_] = D[_];
    }
  }
  return result;
};

module.exports = DroP;
