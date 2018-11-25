# JS面向对象
## JS的继承机制的设计思想
- 在js中new后面跟的不是类，而是构造函数。
- 构造函数生成的实例对象是无法共享属性和方法的
- 构造函数的所有属性和方法都放在prototype对象中，prototype对象才是实例的原型，而所有的实例对象都是“继承”构造函数的prototype对象

## 封装
### 生成实例对象
#### 原始模式
```js
function Cat(name, color) {
  return {
    name: name,
    color: color
  }
}
```
- 生成实例对象就是在调用函数，实例出来的cat1和cat2没有内在的联系，不能反映是同一个对象原型
#### 构造函数模式
- 构造函数也只是一个普通函数，只是内部使用了this变量。对构造函数使用new运算符的时候，生成的实例对象会将this的变量绑定在实例对象上。
```js
function Cat(name, color) {
  this.name = name
  this.color = color
  //当new一个cat1的时候这里的this就是cat1的环境变量了。
  this.food = 'mouse'
}
```
- new出来的cat1和cat2会有一个constructor属性。指向构造函数Cat `cat1.constructor == Cat //true`
- `cat1 instanceof Cat //true`
- 弊端：cat1和cat2拥有相同的属性和方法如food,eat()，则在内存中就存在两个内容相同的`cat1.food == cat2.food //false`占用内存
- `prototype`属性，让food属性和eat()方法都在内存中生成一次，所有的实例都指向`prototype`的内存地址。
- 将不改变的的属性和方法直接定义在`prototype`对象上 `cat1.food == cat2.food //true`

## 构造函数的继承

```js
function Animal() {
  this.species = 'animal'
}
```
### 构造函数绑定
>使用call或者play，将父对象的构造函数绑定在子对象上

```js
function Cat(name, color) {
  Animal.aplly(this, arguments)
  this.name = name
  this.color = color
}

var ca1 = new Cat('one', 'red')
console.log(ca1.species) //'animal'
```
### prototype
- `Cat.prototype = new Animal()` 将Animal的所有属性和实例都赋值给了Cat.prototype对象

### 直接继承prototype
- 让Cat()跳过Animal()，直接继承Animal.prototype,将Cat的prototype
- Cat.prototype的任何修改都会反应到Animal.prototype上

### 利用空对象做介质
- 对上面的方法的改良
```js
var F = function() {}
F.prototype = Animal.prototype
Cat.prototype = new F()
cat.prototype.constructor = Cat
//修改Cat的prototype对象就不会影响到Animal的prototype对象。
// ------------进行一个封装

function extend(Child, Parent) {
  var F = function() {}
  F.prototype = Parent.prototype
  Child = new F()
  Child.prototype.constructor = Child
  Child.uber = Parent.prototype //在子对象上打开一条通道，可以调用父对象的方法
}
```

### 拷贝继承
- 使用for in 遍历拷贝，将父对象的属性和方法都复制给子对象
```js
function extend2(Child, Parent) {
  var p = Parent.prototype
  var c = Child.prototype
  for (var i in p) {
    c[i] = p[i]
  }
  c.uber = p
}
```

## 非构造函数的继承
`var Chinese = {nation: '中国'}`
`var Doctor = {career: '医生'}`
- 得到中国医生的对象

- 通过定义一个函数，把子对象的prototype属性指向父对象
 ```js
 function object(o) {
   function f() {}
   f.prototype = o
   return new f()
 }
var Doctor = object(Chinese)
//再加上子对象自己的属性值
Doctor.career = '医生'
 ```
### 浅拷贝
```js
function extendCopy(Parent) {
  var Child = {}
  for (var i in Parent) {
    Child[i] = Parent[i]
  }
  Child.uber = Parent
  return Child
}
```
- 如果父对象的属性值是一个数组或对象，那么浅复制过来的只不过是这个属性值的应用，对子对象的该属性值进行修改，父对象的属性值会相应改变

### 深拷贝
- 在浅拷贝的基础上加上一个类型判断，如果是属性是对象类型就用递归调用拷贝对象里的每一个值，否则就直接赋值拷贝。
```js
function deepCopy(Parent, Child) {
  var Child = Child || {}
  for (var i in Parent) {
    if (typeof Parent[i] === 'object') {
      Child[i] = (Parent[i].constructor === Array) ? [] : {}
      deepCopy(Parent[i], Child[i])
    } else {
      Child[i] = Parent[i]
    }
  }
}
```
