// Sum all numbers from an array
'use strict';

const k = (s) => {
  let sum = 0;
  for (const i of s) {
    if (typeof i === 'number') sum += i;
  }
  return sum;
};

module.exports = k;
