'use strict'

console.log('iterator in Symbol:', 'iterator' in Symbol)

const generateNumbersObject = {
  start: 1,
  end: 10,
}

generateNumbersObject[Symbol.iterator] = () => ({
  value: generateNumbersObject.start,
  next() {
    return {
      value: this.value,
      done: this.value++ === generateNumbersObject.end + 1,
    }
  },
})

console.log(...generateNumbersObject)

process.exit(0)
