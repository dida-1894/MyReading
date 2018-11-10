#Flex布局

- 任何一个容器都可以指定为flex布局
```css
.box{
	display: flex;
	// 行内元素
	display: inline-flex
}
```
> flex布局以后， 子元素的```float```、```clear```、```vertical-align```属性失效
## 基本概念
- 采用flex布局的元素，称为flex容器，所有子元素称为item
### 容器
- 容器默认存在水平主轴和垂直交叉轴
- 主轴有 main start和main end
- 交叉轴有 cross start和cross end
### item
-  单个项目在主轴上的空间叫 main size
-  单个项目在交叉轴上的空间叫 cross size
![enter image description here](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png)

#### 容器属性
- flex-direction
	- 决定主轴的方向
```css
.box{
	flex-direction: row | row-reverse | column | column-reverse;
	// 默认值为row
}
```
- flex-wrap
	- 决定是否要换行
	- `nowrap` 默认值 不换行
	- `wrap` 换行， 往下排
	- `warp-reverse` 换行， 往上排
```css
.box{
	flex-warp | wrap | warp-reverse;
}
```
- flex-flow
  - flex-direction 和 flex-wrap属性的简写，默认值： row, nowrap
```css
.box {
	flex-flow: <flex-direction> || <flex-wrap>;
}
```
- justify-content
	- 定义项目在主轴上的对其方式
```css
	.box {
		justify-content: flex-start | flex-end | center | space-between | space-around;
	}
```
![enter image description here](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png)

- align-items
	- 定义在交叉轴上如何对齐
```css
	.box {
		align-items: flex-start | flex-end | center | baseline | stretch;
	}
```
![enter image description here](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png)

- align-content
	- 定义多根轴线的对齐方式，如果只有一根轴线，该属性不起作用。
```css
.box{
	align-content: flex-start | flex-end | center | space-around | stretch;
}
```

![enter image description here](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071012.png)

#### 项目属性
- order
	- 定义项目的排列顺序，数值越小，排列越靠前。默认值： 0
```css
.item {
	order: <integer>; //1 | 2 | ... | 99
}
```
- flex-grow
	- 定义项目的放大比例， 默认值：0
 ![enter image description here](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071014.png)
