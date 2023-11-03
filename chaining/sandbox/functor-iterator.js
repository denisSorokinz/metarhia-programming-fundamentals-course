/*
TASK:
create a functor (mutable) w/ iterator
implement iterator, log contents
*/

const carFunctor = (
  data = { brand: '', model: '' },
  mutator = {
    setBrand: (brand) => ((data.brand = brand), mutator),
    setModel: (model) => ((data.model = model), mutator),
    [Symbol.iterator]() {
      let idx = 0;
      return {
        next() {
          const fields = Object.values(data);
          console.log(fields[idx], idx === fields.length, { value: fields[idx], done: true });
          if (idx === fields.length) return { value: fields[idx], done: true };

          return { value: fields[idx++], done: false };
        },
      };
    },
  }
) => mutator;

const cf = carFunctor();

const cfBMW = cf.setBrand('BMW').setModel('5 er');

const arr = [...cfBMW];
console.log(arr, arr.length);
