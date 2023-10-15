const sumTwo = (a, b) => a + b;

const memoize = (fn) => {
  const data = {};

  return (...args) => {
    const key = args.toString();
    if (data[key] === undefined) data[key] = fn(...args);

    return data[key];
  };
};

const mSumTwo = memoize(sumTwo);

mSumTwo(1, 2);
mSumTwo(3, 4);
mSumTwo(1, 2);
