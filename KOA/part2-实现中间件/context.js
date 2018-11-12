let proto = {
}
//ctx对原生req和res的直接取值通过一个代理函数 defineGetter实现
function defineGetter(prop, name) {
  proto.__defineGetter__(name, function() {
    return this[prop][name]
  })
}
//Object.__defineGetter__方法可以将一个函数绑定到当前对象的指定属性上， 当那个属性值被读取时，所绑定的函数就会被调用。

defineGetter('request', 'url')
//proto.url = proto.request.url

defineGetter('request', 'path')
module.exports = proto
