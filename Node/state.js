const { readFile } = require('fs')
const EventEmitter = require('events')

class EE extends EventEmitter {}

const yy = new EE()

yy.on('event', () => {
  console.log('bifg')
})

setTimeout(() => {
  console.log('0ms callback')
}, 0)

setTimeout(() => {
  console.log('100ms callback')
}, 100)

setTimeout(() => {
  console.log('200ms callback')
}, 200)

readFile('./进程模型md', 'utf-8', data => {
  console.log('完成文件 1 读操作的回调')
})

readFile('../JavaScript/es6.js', 'utf-8', data => {
  console.log('完成文件 2 读操作的回调')
})

setImmediate(() => {
  console.log('immediate callback')
})

process.nextTick(() => {
  console.log('process.nextTick callback')
})

Promise.resolve()
  .then(() => {
    yy.emit('event')

    process.nextTick(() => {
      console.log('process.nextTick seconde callback')
    })

    console.log('Promise first callback')
  })
  .then(() => {
    console.log('Promise seconde callback')
  })


//process.nextTick 在事件模型中的一个优先级
//libuv？
// EventEmitter 跟事件相关
/*

process.nextTick -> promise || Event loop timers阶段开始


0
wenjian1
wenjian2
process.nextTick
100
200
callback
process.nextTick seconde callback
Promise first callback
Promise seconde callback
immediate callback
*/
