## 前端之路

    众所周知，前端发展如火如荼，日新月异，而且很长一段时间内都将如此。此项目记录自己的前端进阶之路，如有差错，请指出。
    以下技能图是使用 [MindMaple Lite](https://mindmaple-lite.en.softonic.com/) 画的，相关知识点持续添加
![技能图](./images/前端技能图.png)

## Js篇
###类型
	基本类型：```String, Number, Boolean, Null, Symbol```
	引用类型： ```Object```
	
	ps: 基本类型存在栈中，引用类型存在堆中
	typeof操作符：
![typeof 类型](./images/typeof.jpg)
可以使用typeof来判断数据类型
值得留意的是：```typeof null ->'object'
					 typeof NaN ->'number'
					 typeof [] -> 'object'
					 ```
判断数组的方法：
let a = []

1. a instanceof Array //true
2. a.constructor==Array //true
3. Array.isArray(a) //true 需要浏览器支持
4. 改造3的方法：

```
  if (!Array.isArray) {   Array.isArray = function(arg) {     return Object.prototype.toString.call(arg) === '[object Array]';   }; }

```

谈到变量，就不得不说一下定义变量的关键字：`var`,`let`,`const`,
var: 全局作用域，变量提升
let: 块级作用域
const: 常量
使用规则:能用const则用const，需要改变值，则用let，不到万不得已再使用var
ps: const常量，值不能改变
	eg: ```const obj = {}
			 obj['a'] = 'a' //obj={a:'a'}
			 obj = 'a' //报错
		 ```		 
###原型和原型链
参考
[JS原型、原型链深入理解](https://www.cnblogs.com/wyaocn/p/5815761.html)
## 浏览器相关
pass
## 安全
pass
## 算法
pass
## 数据结构
pass
## 性能
pass
## 网络相关
pass
## 版本管理
pass
## 框架
pass
## 大前端
pass

