setImmediate(() => console.log('[阶段三-check] immediate 回调1'))
setImmediate(() => console.log('[阶段三-check] immediate 回调2'))
setImmediate(() => console.log('[阶段三-check] immediate 回调3'))

setTimeout(() => console.log('[阶段1-timer] 定时器回调1'), 0)
setTimeout(() => console.log('[阶段1-timer] 定时器回调2'), 0)
setTimeout(() => console.log('[阶段1-timer] 定时器回调3'), 0)
