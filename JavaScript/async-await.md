- promise是一个对异步回调的封装
- then只是将callback拆分了
- async/await使用了promise的封装，同时消灭用回调(各种.then,.then)
- 依然没有改变js单线程

### 语法
- 使用await，函数必须用async标识
- await后面跟的是一个Promise实例
- 需要babel-polyfill
```js
const loadImg = (src) =>{
  return new Promise((resolve, reject) => {
    let img = document.createElement('img')
    img.onload = () => resolve(img)
    img.onerror = () => reject()
    img.src = src
  })
}

const src1 = "http://...."
const src2 = "http://...."
const load = async () => {
  const result1 = await loadImg(src1)
  const result2 = await loadImg(src2)
}
```
### async
- async函数作用主要是处理返回值
- async函数返回一个Promise对象 return 返回值 == return Promise.resolve(返回值)
没有返回值 Promise.resolve(undefined)
### await
- 如果await后面是一个Promise对象，Promise resolve的值就是await表达式的运算结果
- 如果await后面的不是一个Promise对象， await的结果就是后面跟的表达式的结果

> async会将后面跟的函数（函数表达式）的放回值封装成一个Promise对象，await将等待这个Promise完成，并将其resolve的结果返回出来。
