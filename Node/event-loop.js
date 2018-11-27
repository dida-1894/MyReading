const fs = require('fs')
//

// fs.readFile('./state.js', data => {
//   console.log('fs callback1')
//   setTimeout(() => console.log('setTimeout callback inside fs'), 0)
//   setImmediate(() => console.log('setImmediate callback inside fs'))
//   process.nextTick(() => console.log('nextTick callback inside fs'))
//   console.log('fs callback 2')
// })
//
// setTimeout(() => console.log('setTimeout callback outside fs'), 20)
//
// process.nextTick(() => {
//   console.log('nextTick callback outside')
//   setImmediate(() => console.log('immediate callback inside nextTick'))
// })

// nextTick callback outside
// immediate callback inside nextTick
// fs callback1
// fs callback 2
// nextTick callback inside fs
// setImmediate callback inside fs
// setTimeout callback inside fs
// setTimeout callback outside fs


process.nextTick(() => {
  console.log('nextTick1');
  process.nextTick(() => {
    console.log('nextTick2');
    process.nextTick(() => {
      fs.readFile('./state.js', data => {console.log('fs callback2')})
      setImmediate(() => console.log("setImmediate1"))
      console.log('nextTick3');
      process.nextTick(() => {
        console.log('nextTick4')
      })
    })
  })
})
