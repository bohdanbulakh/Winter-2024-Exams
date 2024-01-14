// Sum all numbers from an array
'use strict';

const sumArrayNumbers = (array) => {
  let sum = 0;
  for (const element of array) {
    if (typeof element === 'number') sum += element;
  }
  return sum;
};

module.exports = sumArrayNumbers;
