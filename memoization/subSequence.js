/*
TASK:
implement sumSequenceRecursive function that
accepts from, to arguments
and returns sum of all elements b/w them (from, to inclusive)

IMPLEMENTATION:
use recursion to handle
sumSequenceRecursive(from, to) =
  sumSequenceRecursive(from, to - 1) + to
  
BASE CASE:
from === to => 0
*/

const sumSequenceRecursive = (from, to) => {
  if (from === to) return from;

  return sumSequenceRecursive(from, to - 1) + to;
};

const cache = {};
const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    const key = arguments.toString();
    if (cache[key] === undefined) cache[key] = fn(...args);

    return cache[key];
  };
};

const mSumSequenceRecursive = memoize(sumSequenceRecursive);

let label = console.time();
console.log(sumSequenceRecursive(1, 5000));
console.log(sumSequenceRecursive(1, 5005));
console.timeEnd(label);

label = console.time();
console.log(mSumSequenceRecursive(1, 5000));
console.log(mSumSequenceRecursive(1, 5005));
console.timeEnd(label);
