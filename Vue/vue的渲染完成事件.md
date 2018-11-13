- Vue本身带有两个回调函数
  - Vue.nextTick(callback) 当数据发生变化，更新后回调
  - Vue.$nextTick(callback) 当dom发生变化，更新后回调
```html
<ul id="demo">
    <li v-for="item in list">{{item}}</div>
</ul>
```

```js
  new Vue({
      el:'#demo',
      data:{
          list=[0,1,2,3,4,5,6,7,8,9,10]
      },
      methods:{
          push:function(){
              this.list.push(11);
              this.nextTick(function(){
                  alert('数据已经更新')
              });
              this.$nextTick(function(){
                  alert('v-for渲染已经完成')
              })
          }
      }
  })
```  
