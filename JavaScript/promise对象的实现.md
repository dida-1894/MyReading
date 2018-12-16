### thenable
```js
if ( p !== null && 
     (
       typeof p === 'object' || 
       typeof p === 'function'
     ) &&
     typeof p.then === 'function'
) {
    // thenable
} else {
    // 非 thenable 
}
```
### then方法
- `promise`实例化时传入的函数会立即执行，`then()`中的回调需要延迟调用
```js
var asyncFn = function () {
  if (typeof process === 'object' && process !== null && 
      typeof(process.nextTick) === 'function'
  ) {
    return process.nextTick;
  } else if (typeof(setImmediate) === 'function') {
    return setImmediate;
  }
  return setTimeout;
}();

```
### Promise状态
### Promise构造函数