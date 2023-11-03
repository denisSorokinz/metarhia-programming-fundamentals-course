'use strict';

/*
TASK:
come up w/ my own functor (mutable)
topic: car factory
*/

const carFunctorMutable = (
  data = { brand: '', model: '' },
  mutator = {
    setBrand: (brand) => ((data.brand = brand), mutator),
    toString: () =>
      Object.entries(data)
        .map(([key, value]) => `${key}-${value || 'not_set'}`)
        .join('\n'),
  }
) => mutator;

const cfm = carFunctorMutable();
const cfmBMW = cfm.setBrand('BMW');
console.log(`${cfmBMW}`);
