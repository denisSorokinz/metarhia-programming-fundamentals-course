'use strict';

/*
TASK:
come up w/ my own functor (immutable)
topic: car factory
*/

const carFunctor = (data = { brand: '', model: '' }) => ({
  setBrand(brand) {
    return carFunctor({ ...data, brand });
  },
  toString() {
    return Object.entries(data)
      .map(([key, value]) => `${key}-${value || 'not_set'}`)
      .join('\n');
  },
});

const cf = carFunctor();
const cfBMW = cf.setBrand('BMW');

const str = cfBMW.toString();

console.log(str);
