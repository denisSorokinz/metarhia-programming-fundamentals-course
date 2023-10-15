const fib = (n) => {
  if (n === 1 || n === 2) return 1;

  return fib(n - 2) + fib(n - 1);
};

const data = {};

const mFib = (n) => {
  console.log("[n]", n);
  if (data[n]) return data[n];
  if (n === 1 || n === 2) return 1;

  data[n] = mFib(n - 1) + mFib(n - 2);
  return data[n];
};

const fibTabulation = (n) => {
  let arr = new Array(n + 1).fill(null);

  arr[0] = 1;
  arr[1] = 1;

  arr.forEach((value, idx) => {
    if (value === null) arr[idx] = arr[idx - 1] + arr[idx - 2];
  });

  return arr[arr.length - 1];
};

console.log(fibTabulation(1000));
