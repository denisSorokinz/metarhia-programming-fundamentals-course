"use strict";

const coffee = (volume, strength) =>
  `Coffee volume: ${volume}ml, strength: ${strength}`;

const defineCoffeeType = (volume) => (strength) => coffee(volume, strength);

// Use function defineCoffeeType to define new coffee types.
// Define coffee type espresso which volume should equal 50ml.
// Define coffee type americano which volume should equal 150ml.

const espresso = defineCoffeeType("50")("1");
const americano = defineCoffeeType("150")("2");

console.log(espresso, americano);

module.exports = { espresso, americano };
