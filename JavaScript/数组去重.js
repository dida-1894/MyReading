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
// console.log(usingSet2)
//----------------------------------------------特殊类型的去重
// var str1 = '1';
// var str2 = new String('1');
//
// console.log(str1 == str2); // true
// console.log(str1 === str2); // false
//
// console.log(null == null); // true
// console.log(null === null); // true
//
// console.log(undefined == undefined); // true
// console.log(undefined === undefined); // true
//
// console.log(NaN == NaN); // false
// console.log(NaN === NaN); // false
//
// console.log(/a/ == /a/); // false
// console.log(/a/ === /a/); // false
//
// console.log({} == {}); // false
// console.log({} === {}); // false
/*
filter和set都不能解决对象和NAN的去重
*/

var specialArr = [1, 1, '1', '1', null, null, undefined, undefined, new String('1'), new String('1'), /a/, /a/, NaN, NaN];
const newSpecialArr = specialArr.filter((item, index, arr) => arr.indexOf(item) === index)
console.log(newSpecialArr) //[ 1, '1', null, undefined, [String: '1'], [String: '1'], /a/, /a/ ]
// indexOf的底层是用===
const newSpecialArr2 = [...new Set(specialArr)]
console.log(newSpecialArr2) //[ 1,   '1',   null,   undefined,   [String: '1'],   [String: '1'],   /a/,   /a/,   NaN]
// Set 认为尽管 NaN === NaN 为 false，但是这两个元素是重复的

//用一个空对象，把数组的值存成Object的key值(但是对象的额key只能是字符串，所以使用+拼接)， 如果Object[arr[i]] = true
//其实加号拼接的过程就是把特殊类型转化成了字符串
function usingObjectUnique(arr) {
  let obj = {}
  return arr.filter(item => {
    return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
  })
}
console.log(usingObjectUnique(newSpecialArr))

//(new String('1')) instanceof  String -> true  String构造函数生成
// typeof new String('1') -> object
