const crypto = require("node:crypto");

const generateKey = (...args) => {
  const argsStr = args.toString();

  return crypto.createHash("sha256").update(argsStr);
};

console.log(generateKey("1", "2").digest("hex"));
