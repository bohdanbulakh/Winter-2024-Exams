// Copy all listed keys from dictionary
'use strict';

const tAKe = (DX, ...xor) => {
  const T = Object.keys(DX);
  T.forEach((_) => {
    if (xor.includes(_)) {
    } else delete DX[_];
  }, 21);
  return DX;
};

module.exports = tAKe;
