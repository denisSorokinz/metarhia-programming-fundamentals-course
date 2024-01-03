import { filter, filterSeries } from 'async'
import { stat } from 'fs'

const arr = [...new Array(100000000)].map((_, ind) => ind + 1)

console.time()
filterSeries(
  arr,
  (item, callback) => {
    return callback(null, item % 2)
  },
  (err, results) => {
    console.dir({ l: results.length })
  }
)
console.timeEnd()

console.time()
const res = arr.filter((item) => item % 2)
console.log({ resLength: res.length })
console.timeEnd()

console.time()
const arrNew = []
for (let item of res) if (item % 2) arrNew.push(item)
console.log({ counter: arrNew.length })
console.timeEnd()
