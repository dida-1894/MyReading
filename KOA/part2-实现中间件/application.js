const http = require('http')
const Stream = require('stream')
const EventEmitter = require('events')
const request = require('./request.js')
const context = require('./context.js')
const respones = require('./respones.js')

class Koa extends EventEmitter {
  constructor() {
    super()
    // this.fn 改成中间件数组
    this.middlewares = [] //将每个中间件按顺序存放
    this.request = request
    this.respones =respones
    this.context = context
  }

  use(fn) {
    // this.fn = fn
    this.middlewares.push(fn) //每次use 把当前回调函数存进数组
  }

  //执行middlewares数组用到的compose函数
  // compose(middlewares, ctx) {
  //   function _dispath(index) {
  //     if (index === middlewares.length) return //最后一次next不执行
  //     let middleware = middlewares[index] //去当前被调用的函数
  //     middleware(ctx, () => _dispath(index+1)) //函数递归，传入ctx和下一个将被调用的函数
  //   }
  //   _dispath(0)
  // }

  // 把每个回调包装成Promise以实现异步
  compose(middlewares, ctx) {
    function _dispath(index) {
      if (index === middlewares.length) return Promise.resolve()
      let middleware = middlewares[index]
      return Promise.resolve(middleware(ctx, () => _dispath(index+1)))
    }
    return _dispath(0)
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
    // this.fn(ctx)
    let fn = this.compose(this.middlewares, ctx)
    fn.then(() => { //then()之后做判断
      if (typeof ctx.body == 'object') { //如果body是对象， 按json输出
        res.setHead('Contend-Type', 'application/json;charset=utf8')
        res.end(JSON.stringify(ctx.body))
      } else if(ctx.body instanceof Stream) { //如果是流
        ctx.body.pipe(res)
      }
      else if (typeof ctx.body === 'string' || Buffer.isBuffer(ctx.body)) { //如果是字符串或者buffer
        res.setHead('Contend-Type', 'text/htmlcharset=utf8')
        res.end(ctx.body)
      } else {
        res.end('Not Found')
      }
    })
      .catch(err => {
        this.emit('error', err)
        res.statusCode = 500
        res.end('server error')
      })
  }

  listen(...args) {
    let server = http.createServer(this.handleRequest.bind(this))
    server.listen(...args)
  }
}

module.exports = Koa
