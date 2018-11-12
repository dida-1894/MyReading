const http = require('http')
const Stream = require('stream')
const EventEmitter = require('events')
const request = require('./request.js')
const context = require('./context.js')
const respones = require('./respones.js')

class Koa extends EventEmitter {
  constructor() {
    super()
    this.fn
    this.request = request
    this.respones =respones
    this.context = context
  }

  createContext(req, res) {
    let ctx = Object.create(this.context)
    let request = ctx.request  = Object.create(this.request)
    let respones = ctx.respones = Object.create(this.respones)

    //为了用户在ctx上可以用各种姿势取值
    ctx.req = request.req = respones.req = req
    ctx.res = request.res = respones.res = res
    request.ctx = respones.ctx = ctx
    request.respones = respones
    respones.request = request
    return ctx
  }

  handleRequest(req, res) {
    // let ctx = this.createContext(req, res)
    // this.fn(ctx)
    // res.end(ctx.body)
    res.statusCode = 404 //默认404，在respones文件中收到body的值之后修改状态码为200
    let ctx = this.createContext(req, res)
    this.fn(ctx)
    if (typeof ctx.body == 'object') { //如果body是对象， 按json输出
      res.setHeader('Contend-Type', 'application/json;charset=utf8')
      res.end(JSON.stringify(ctx.body))
    } else if(ctx.body instanceof Stream) { //如果是流
      ctx.body.pipe(res)
    }
    else if (typeof ctx.body === 'string' || Buffer.isBuffer(ctx.body)) { //如果是字符串或者buffer
      res.setHeader('Contend-Type', 'text/html;charset=utf8')
      res.end(ctx.body)
    } else {
      res.end('Not Found')
    }
  }

  use(fn) {
    this.fn = fn
  }

  listen(...args) {
    let server = http.createServer(this.handleRequest.bind(this))
    server.listen(...args)
  }
}

module.exports = Koa
