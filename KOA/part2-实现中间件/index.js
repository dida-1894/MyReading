let Koa = require('./application.js')

let app = new Koa()

app.use((ctx, next) => {
  console.log(1)
  next()
  console.log(2)
})
app.use((ctx, next) => {
  console.log(3)
  next()
  console.log(4)
})
app.use((ctx, next) => {
  console.log(5)
  next()
  console.log(6)
})

// 1
// 3
// 5
// 6
// 4
// 2

app.use(async (ctx, next) => {
  console.log(1)
  await next()
  console.log(2)
})

app.use(async (ctx, next) => {
  console.log(3)
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(3.5)
      resolve()
    }, 1000)
  })
  await p.then()
  await next()
  console.log(4)
  ctx.body='hello'
})


app.listen(3000)

console.log('application is running in 3000')
