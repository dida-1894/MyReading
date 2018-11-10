# CSS3动画

#### 易混淆的概念
 - animation（动画）： 用于设置动画属性，这是一个简写属性，包含6个属性
 - transition（过度）： 用于设置元素的样式过去，和animation有着类似的效果，但细节上有很大不同
 - transform（变形）： 用于元素进行旋转， 缩放， 移动或倾斜， 和设置样式的动画没有什么关系，相当于color一样设置元素的“外表”
 - translate（移动）： translate只是transform的一个属性值，即移动

 ### transition
	- 如元素的color属性从red过度到green，需要一个条件来触发，如平时用到的`:hover`, ` :focus`, `:checked`, 媒体查询， JavaScript。

 ```html
 <!DOCTYPE html>
<html lang="en">
<head>
  <title>transition</title>
  <style>
    #box {
      height: 100px;
      width: 100px;
      background: green;
      transition: transform 1s ease-in 1s;
    }
    #box:hover {
      transform: rotate(180deg) scale(.5, .5);
    }
  </style>
</head>
<body>
  <div id="box"></div>
</body>
</html>
 ```
 - 这个过程里transition给元素设置的过度属性是transform， 鼠标移入，元素的transform发生了改变，触发transition产生动画。当鼠标移除，同样。
	 - 需要事件触发
	 - 一次性，除非一再触发，不能重复发生。
	 - 只能定义开始状态和结束状态。
	 - 一条transition规则，只能定义一个属性的改变。
 ----------------------
 `transition: property | duration | timing-function | delay`
	- property: 设置过度的css属性。
	- duration：设置过度持续的时间，秒或毫秒。
	- timing-function： 速度效果的速度曲线
	- delay： 设置效果何时开始
	### animation
	> 官方介绍为transition的属性扩张，弥补transition的不足。 可理解为多个transition的效果叠加
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <title>animation</title>
  <style>
    .box {
      height: 100px;
      width: 100px;
      border: 15px solid black;
      animation: changebox 1s ease-in-out 1s infinite alternate running forwards;
    }

    .box:hover {
      animation-play-state: paused;
    }

    @keyframes changebox {
      10% {
        background: red;
      }
      50% {
        width: 80px;
      }
      70% {
        border: 15px solid yellow;
      }
      100% {
        width: 180px;
        height: 180px;
      }
    }
  </style>
</head>

<body>
  <div class="box"></div>
</body>

</html>
```
- animation定义了一个组合动画 changebox，相较于transition，它可以改变多个属性值，定义不同的时间点。
- `animation: name | duration | timing-function | delay | iteration-count | direction | play-state | fill-mode;`
	- name： 调用`@keyframes`定义好的动画， 于`@keyFrames`定义的动画名一致
	- duration： 指定动画所持续的时间
	- timing-function：速度曲线
	- delay： 整个animation开始前等待的时间
	- iteration-count： 定义动画播放的次数， 可选具体次数或者无限（`infinite`）
	- direction：设置动画播放的方向，`normal`（按时间轴顺序播放）， `alternate`（轮流， 来回反复进行）
	- play-state： 控制播放状态 `running`（继续）| `paused`（暂停）
	- fill-mode： 控制动画结束后， 元素的样式。 有四个值： `none`（回到动画还没有开始的状态）， `forwards`（动画结束后动画停留的结束状态），`backwords`（动画第一帧的状态），`both`（根据animation-direction轮流应用`forwards`和`backword`的规则），请注意不要和iteration-count（动画无限执行）冲突。
- 可借助强大的css动画库Animate.css 
