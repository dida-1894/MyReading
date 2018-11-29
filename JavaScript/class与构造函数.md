- class只是构造函数的语法糖
- typeof AClassName //'function'
- AClassName === AClassName.prototype.constructor //'true'
- aclass.__proto__ ===AClassName.prototype //'true'
- 代表class完全符合构造函数的特性
### class的继承
- 在之前的构造函数里的继承实现之一 `Dog.prototype = new Animal()`
- class里 `class Dog extends Animal {...} `
- Dog的constructor里记得使用`super(填入父类constructor里的参数)` ，先/看作是对父类constructor的传递吧


- class更贴合面向对象的思想
- 对继承更易读
- 本质是语法糖，通过原型继承。
