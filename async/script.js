import async from 'async'

const fn1 = (arg1, cb) => {
  console.log('fn1', arg1)
  cb()
}
const fn2 = (cb) => {
  console.log('fn2')
  cb(null, 1)
}

const composed = async.compose(fn1, fn2)

composed()
