"use strict";

const iterate = (obj, callback) =>
  Object.entries(obj).map(([key, value]) => callback(key, value, obj));

module.exports = { iterate };
