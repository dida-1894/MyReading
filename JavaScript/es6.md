## let const var

## 解构赋值
> 像一种“模式匹配”，只要等号左边的能匹配到右边的值（即拥有相同的模式）左边的变量就可以被被赋为右边的值，部分匹配的匹配部分赋值成功，未匹配部分undefind

- 允许指定默认值
```js
let [foo = true] = [];
foo // true

let [x, y = 'b'] = ['a']; // x='a', y='b'
let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
```
- ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。
- 字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。

```js
const [a, b, c, d, e] = 'hello';
a // "h"
b // "e"
c // "l"
d // "l"
e // "o"
```

### 用途
- 交换变量
```js
let x = 1;
let y = 2;

[x, y] = [y, x]
```
- 从函数返回多个值
- 遍历map结构
- 提取JSON数据
- 填函数参数的默认值
- 输入模块的指定方法

## 函数
- es6能为函数参数指定默认值
- 函数的参数如果被指定了默认值，这个参数会不被计入函数的length属性
### rest参数
> 参数数组

`...变量名`
- rest只能是最后一个参数，如果rest后面还有参数会报错。
- rest函数的length属性，不包括rest参数

### name属性
> 返回函数的函数名

### 箭头函数
> 一种简化的匿名函数

- 箭头函数里的this对象是定义时所在的对象，而非使用时所在的对象。this函数让this“固定化”，利于封装回调函数。
- 不能new，不可以当作构造函数。
- 没有arguments对象，可以用rest参数代替
- 不能作为generator函数