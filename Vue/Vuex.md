# vuex
> store （仓库） 存储state（状态）

- vuex的状态存储是响应式的，vue 组件-> store， store changed -> vue 组件changed
- store 不能直接改变， 只能通过 commit mutataion
- 每个应用只包含一个store


## store
- 在vue组件中获取vuex的状态 ```this.$store.state```
- mapState
### state访问状态对象
- computed直接赋值
```vuejs
  computed:{
    count(){
        return this.$store.state.count;
    }
  }
```
- mapState对象赋值
```vuejs
import { mapState } from 'vuex' //必须先引入，记得加{}

computed: mapState({
    count:state=>state.count
})
```
- mapState数组赋值
```vuejs
computed: mapState(["count"])
```

## Mutations 修改状态
- $store.commit() Vuex提供了commit方法来修改状态。
```
<button @click="$store.commit('add')">+</button>
//store.js文件
const mutations={
    add(state){
        state.count++
    }
}
```

- 传值 -> 在Mutations里再加一个参数，并在commit的时候传递。
```
const mutations = {
    add(state, n){
        state.count+= n
    }
}

<button @click="$store.commit('add',10)">+</button>
```
### 模板获取Mutations方法
- 使用mapMutations
```
import{ mapState, mapMutations } from 'vuex'
methods:mapMutations([
    'add'
])
<button @click='add'></button>

```

### Mutation-types
> 你可以不用mutation-types.js。直接在mutations.js中映射相关的方法过来使用，比如下面的demo
```javascript
// mutations.js
const INCREASE = 'INCREASE'
export default {
    [INCREASE] (state,data) {
        state.music.num++;
    }
}
```
使用mutation-types.js的话是为了方便管理,想一下，一大堆的功能模块混合在一起，那得是多糟糕啊。方便管理的demo如下:
```javascript
// mutation-types.js
export const INCREASE = 'INCREASE'
// mutations.js
import { INCREASE } from './mutation-types'
export default {
    [INCREASE] (state,data) {
        state.music.num++;
    }
}
```



## Getter 计算过滤操作
- 可以看作是store的计算属性，既是在获取数据之前进行的一种再编辑，相当于对数据的一个过滤加载工作。
### Getter基本用法
- 对store里的count进行计算属性操作，现在store里用const声明getters属性
```vuejs
const getters = {
    count:function(state){
        return state.count += 10
    }
}
//将store暴露出去之前，添加getters属性
export defaut new Vux.store({
    state, mustations, getters
})
```
- 到vue文件里对computed进行配置（PS：Vue构造器里只能有一个computed属性，所以运用ES6的展开运算符'...'）
```vuejs
computed: {
    ...mapState(["count"]),
    count(){
        return this.$store.getters.count
    }
}
```
- 对Vue文件的配置也可以使用gettersMap简化
```vuejs
import { mapState, mapMutations, mapGetters } from 'vuex'
computed: {
    ...mapState(["count"]),
    ...mapGetters(["count"])
}
```
## actions异步状态修改
- actions提交的是mutation，而不是直接变更状态
- actions可包含异步操作
### actions基本用法
 - 在store中声明
 	```javascript
 	const actions = {
 		addAction(context){
 			context.commit('add', 10)
 		}
 	}
 	```
   - Action接受一个和store实例具有相同方法和属性的context对象。
   - 可以用context。commit提交mutation，或者通过context.state , context.getters来获取state或者getters
   - context对象不是store实例本身
 ```vuejs
//Action通过store.dispatch方法触发
store.dispatch('addAction')
```
 - 在vue文件中的使用
 ```js
<buton @click="addAction">+</buton>
methods: {
    ...mapMutations([
        'add'
    ]),
    ...mapActions(['addAction'])
}
```
## Module 模块
> 当所有的状态都集中到一起store对象会变得十分臃肿， Vuex允许将store模块化，
每个模块拥有自己的state， mutstaion， action， getter， 甚至嵌套子模块
```js
const moduleA = {
    state: {...},
    mutaions: {...},
    actions: {...},
    getters: {...}
}

const moduleB = {
    state: {...},
    mutaions: {...},
    actions: {...},
    getters: {...}
}

const store = new Vuex.Store({
modules: {
    a: moduleA,
    b: moduleB
}
})

store.state.a // ->moduleA 的状态
store.state.b // ->moduleB 的状态
```
