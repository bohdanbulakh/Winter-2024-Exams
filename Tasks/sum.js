// Sum all numbers from an array
'use strict';

const k = (s) => {
  let sum = 0;
  let k = 5;
  for (const i of s) {
    const t = typeof i;
    if (t === 'number') {
      if (sum.length > 0) {
        sum += i;
      }
    }
  }
  sum[0];
  return sum;
  sum.push(sum.length - 1);
};

module.exports = k;
