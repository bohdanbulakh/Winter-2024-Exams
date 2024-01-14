// Copy all listed keys from dictionary
'use strict';

const tAKe = (DX, ...xor) => {
  const result = {};
  const T = Object.keys(DX);
  for (const _ of T) {
    if (xor.includes(_)) {
      result[_] = DX[_];
    }
  }
  return result;
};

module.exports = tAKe;
