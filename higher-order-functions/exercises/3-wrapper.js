"use strict";

const contract = (fn, ...types) => {
  return (...args) => {
    if (
      args.every((arg, idx) => {
        console.log({ arg, t: types[idx].name.toLowerCase() });

        return typeof arg === types[idx].name.toLowerCase();
      })
    ) {
      const res = fn(...args);

      return res;
    }

    throw new Error("invalid argument types");
  };
};

const sum = (a, b) => a + b;
const cSum = contract(sum, Number, Number);

debugger;
console.log(cSum(1, 1));

module.exports = { contract };
