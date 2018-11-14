array中元素查找
- Array.indexOf() 查找元素，如果找到返回该查找元素，如果没有找到放回 -1
- Array.includes() 仅仅查找是否有某个元素， 返回值为boolean

元素过滤
- Array.find() 只返回符合条件的第一项，返回之后立即结束执行
- Array.filter() 遍历整个数组，每一项都执行回调
```js
const characters = [
 { id: 1, name: 'ironman' },
 { id: 2, name: 'black_widow' },
 { id: 3, name: 'captain_america' },
 { id: 4, name: 'captain_america' },
];

function getCharacter(name) {
 return character => character.name === name;
}

console.log(characters.filter(getCharacter('captain_america')));
// [
//   { id: 3, name: 'captain_america' },
//   { id: 4, name: 'captain_america' },
// ]

console.log(characters.find(getCharacter('captain_america')));
// { id: 3, name: 'captain_america' }
```
