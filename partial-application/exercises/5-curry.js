"use strict";

// Check 4 digit pin.
const EXPECTED_PIN = "4967";
const checkPin = (...code) => code.join("") === EXPECTED_PIN;

// Define function curry that accepts the length of the function
// (amount of function arguments) and the function.

// const curry =
//   (length, fn) =>
//   (...args) => {
//     if (args.length >= length) return fn(...args);

//     return (...args2) => curry(length, fn)(...args, ...args2);
//   };

const curry = (length, fn, ...par) => {
  const curried = (...args) => args.length === length ? fn(...args) : curry(length - args.length, fn.bind(null, ...args));

  return par.length ? curried(...par) : curried;
}

// Allows to enter pin code by one character,
// Usage: press('3')('4')('5')('6')
const press = curry(4, checkPin);
// debugger;
console.log(press("4")("9")("6")("7"));

module.exports = { press };
