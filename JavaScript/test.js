'use strict'
// var a = 10
// function fn() {
//     console.log(a)
// }
//
// function bar(f) {
//      var a = 20
//     f()
// }
//
// bar(fn)

function fn() {
    var max = 10
    return function bar(x) {
        console.log(x+max)
    }
}

var max = 100, f1 = fn()
f1(10)