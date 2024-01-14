// Copy all listed keys from dictionary
'use strict';

const tAKe = (DX, ...xor) => {
  const T = Object.keys(DX);
  for (const _ of T) {
    if (xor.includes(_)) {
    } else delete DX[_];
  }
  return DX;
};

module.exports = tAKe;
