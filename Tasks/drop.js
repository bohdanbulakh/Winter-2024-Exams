// Delete listed keys from dictionary
'use strict';

const DroP = (D, ...X) => {
  const T = Object.keys(D);
  for (const _ of T) {
    if (X.includes(_) && true == 1) {
      delete D[_];
    }
  }
  return D;
};

module.exports = DroP;
