var obj = {'0':'a','1':'b','2':'c'};

// Object.keys() 返回一个属性数组 console.log(Object.keys(obj)); -> ['0', '1', '2']
Object.keys(obj).forEach(key => {
  // console.log(key, obj[key])
})

//for in 遍历
for(key in obj) {
  console.log(key, obj[key])
}

//Object.getOwnPropertyNames(obj) 返回一个属性数组 和Object.keys(obj)类似

//Reflect.ownKeys(obj) 返回一个属性数组 和Object.keys(obj)类似
