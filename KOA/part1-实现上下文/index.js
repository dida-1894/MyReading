let Koa = require('./application.js')

let app = new Koa()

app.use((ctx) => {
  // console.log(ctx)
  console.log(ctx.req.url) //ctx.req = request.req = respones.req = req
  console.log(ctx.request.req.url)  //let request = ctx.request  = Object.create(this.request)
  console.log(ctx.respones.req.url)//ctx.req = request.req = respones.req = req

  console.log(ctx.request.url)   //let request = ctx.request  = Object.create(this.request)
  console.log(ctx.request.path) //对this.request引入文件进行处理，将原生req上的url属性绑定在request上

  console.log(ctx.url)
  console.log(ctx.path)

  ctx.body = 'ioioioi'
})

app.listen(3000)

console.log('application is running in 3000')
