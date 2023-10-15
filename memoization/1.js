const sumTwo = (a, b) => a + b;

const memoize = (fn) => {
  const cache = {};

  return (...args) => {
    const key = args.toString();
    if (cache[key] === undefined) cache[key] = fn(...args);

    return cache[key];
  };
};

const mSumTwo = memoize(sumTwo);

mSumTwo(1, 2);
mSumTwo(3, 4);
mSumTwo(1, 2);
