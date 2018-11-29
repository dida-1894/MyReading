## 回调函数
f1(); f2();
---
function f1(cb) {
  setTimeout(() => {
    cb();
    }, 1000)
}
f1(f2)

## 事件监听
- 事件驱动模式， 任务的执行不取决于代码的执行顺序而是取决于某个事件是否发生

```js
f1.on('Done', f2)
function f1() {
  setTimeout(() => {
    //...
    f1.trigger('Done')
  }, 1000)
}
```

- 非常好理解，同时可以绑定多个事件，执行指定的多个回调函数，去耦合，利于实现模块化
- 缺点是整个程序都会变成事件驱动型， 运行流程会变得很不清晰。


## 发布订阅
- 和上面的事件监听差不多，把on替换成订阅subscribe， trigger替换成publish。同时在f2执行完毕之后可以取消订阅unsubscribe
- 发布订阅优于事件监听，因为我们可以通过 “消息中心” 查看存在多少信号，每个信号有多少个订阅者，从而控制进程。

## promise对象
- 每一个异步任务都放回一个promise对象，promise的then()方法来指定回调函数。
```js
f1().then(f2).then(f3)

f1().then(f2).fail(f3)
```
- 回调变成链式，流程清晰。
- 基本语法
  - 定义一个函数（包裹）return一个promise实例
- 异常捕获
  - throw new Error 语法报错，业务逻辑之外的报错
  - 业务逻辑之内的错误，例如请求图片地址404，调用reject()方法
- 多个串联
  - 多个then()的创联使用主要看前一个then()return的promise对象
  - 如果前一个then没有return promise新对象，那两个回调函数操作的是同一个promise对象
- Promise.all Promise.race
  - .all([promise1,promise2,...]).then(datas => {
    console.log(datas[0])
    console.log(datas[1])
    ...
    })
    //接收一个promise对象数组，全部完成之后，统一执行success
  - .race([promise1, promise2, ...]).then(data => {
    console.log(data) //promise数组里最先完成的promise返回值
    })
    //接收一个promise对象数组，只有有一个完成就执行success
- Promise标准
  - 状态变化
    - pending - > fulfilled || -> rejected
  - then
    - promise实例必须实现then方法
    - then方法必须接收两个函数作为参数
    - then返回的必须是一个promise实例
