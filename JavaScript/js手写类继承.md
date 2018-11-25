## js实现继承的六种方法

- 定义一个Animal父类

```js
function Animal(name) {
  this.name = name || 'Animal'

  this.sleep = function() {
    console.log(this.name + "  is sleeping")
  }
}

Animal.prototype.eat = function(food) {
  console.log(this.name + "  is eating" + food)
}
```


### 原型链继承
>将父类的实例作为子类的原型

```js
//将父类的实例作为子类的原型
function Cat() {}
Cat.prototype =  new Animal()
Cat.prototype.name = 'cat'
-----------
var cat = new Cat();
console.log(cat.name)
cat.eat('fish')
cat.sleep()
console.log(cat instanceof Animal) //true
console.log(cat instanceof Cat) //true
```
- 实例是子类的实例，也是父类的实例
- 父类新增的属性和方法都能访问得到
- 创建子类实例的时候，无法向父类构造函数传递参数
###
