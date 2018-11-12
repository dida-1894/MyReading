const url = require('url')

let request = {
  get url() {
    return this.req.url
  },
  get path() {
    return url.parse(this.req.url).pathname
  },
  get query() {
    return url.parse(this.req.url).query
  }
}
//使用对象get访问器返回一个处理过的数据，将数据绑定到request对象上
//  在application中
// const request = require('./request.js')
// let request = ctx.request  = Object.create(this.request)
//this既是ctx

module.exports = request
