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