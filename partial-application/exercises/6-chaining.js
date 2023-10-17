"use strict";

// Check 4 digit pin.
const PIN_LENGTH = 4;
const EXPECTED_PIN = "4967";
const checkPin = (...code) => {
  console.log(code, code.join("") === EXPECTED_PIN);
  return code.join("") === EXPECTED_PIN;
};

// Implement function press
// that allows to enter pin code by one character,
// e.g. press('3').press('4').press('5').press('6')
//
// For hint use https://github.com/HowProgrammingWorks/Cheatsheet

const press = (digit) => {
  const entered = [digit];

  return {
    press(dgt) {
      entered.push(dgt);

      return entered.length < PIN_LENGTH ? this : checkPin(...entered);
    },
  };
};

console.log(press("4").press("9").press("6").press("7"));

module.exports = { press };
