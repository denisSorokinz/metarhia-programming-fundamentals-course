const wrap = (fn) => {
  let counter = 0;
  let limit = null;
  let timer = null;
  let func = fn;

  const wrappedFn = (...args) => {
    console.log({ counter, limit, timer, func });
    if (counter === limit) wrappedFn.cancel();

    if (!func) return;

    counter++;
    return func(...args);
  };

  const methods = {
    timeout(ms) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => this.cancel(), ms);
      return this;
    },
    cancel() {
      func = null;
      return this;
    },
    resume() {
      func = fn;
      return this;
    },
    limit(n) {
      limit = n;
      counter = 0;
      return this;
    },
  };

  return Object.assign(wrappedFn, methods);
};

const baseFn = (arg1) => console.log(arg1);

const f = wrap(baseFn).timeout(200).limit(3);

f("1st");

setTimeout(() => {
  f("2nd");
  f.cancel();
  f("3rd");
  f.resume();
  f("4th");

  setTimeout(() => {
    f("5th");

    setTimeout(() => {
      f.limit(1);
      f("6th");
      f("7th");
      f.resume();
      f("8th");
    }, 150);
  }, 150);
}, 150);
