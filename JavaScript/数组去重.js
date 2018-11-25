var array = [1, 1, '1', '1', 2]

function unique(array) {
  let res=[]
  array.forEach((item, index) => {
    if (res.indexOf(item) === -1) {
      res.push(item)
    }
  })
  return res
}
// console.log(unique(array))

let newArr = array.filter((item, index, arr) => arr.indexOf(item) === index)
// console.log(newArr)

//使用Set Set是一种新的es6的语法结构，类似于数组，但是成员的值都是唯一的。Set本身是一个构造函数，用来生成Set数据结构。

let usingSet = [...new Set(array)]
let usingSet2 = Array.from(new Set(array))
console.log(usingSet2)
