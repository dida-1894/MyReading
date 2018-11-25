function Animal(name) {
  this.name = name || 'Animal'

  this.sleep = function() {
    console.log(this.name + "  is sleeping")
  }
}

Animal.prototype.eat = function(food) {
  console.log(this.name + "  is eating" + food)
}

function Dog() {}
Dog.prototype = new Animal('dog')
// Dog.prototype.name = 'dog'

var dog = new Dog()
console.log(dog.name)
dog.eat('meat')
dog.sleep()

Animal.prototype.catch = function(liewu) {
  console.log(this.name + " is catching " + liewu)
}

dog.catch('mouse')
