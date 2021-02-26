/*
 * @Author: xiongying
 * @Date: 2021-01-11 11:44:07
 * @Description: JS基础
 */

/**
 * ['1', '2', '3'].map(parseInt)
 * 
 * 考察知识点
 * 1、parseInt(num, n) 进制转换 
 * 2、map 回调函数 callback(value, index, array)
 */
// 解析：
// parseInt(value, radix) ，而 map 的回调函数需要三个参数 callback(currentValue, index, array)。
// MDN文档中指明 parseInt 第二个参数是一个2到36之间的整数值，用于指定转换中采用的基数。
// 如果省略该参数或其值为0，则数字将以10为基础来解析。如果该参数小于2或者大于36，则 parseInt 返回 NaN。此外，转换失败也会返回 NaN。
// 现在来分析问题。parseInt("1", 0) 的结果是当作十进制来解析，返回 1；parseInt("2", 1) 的第二个参数非法，返回 NaN；parseInt("3", 2) 在二进制中，"3" 是非法字符，转换失败，返回 NaN。  
console.log(['1', '2', '3'].map(parseInt))

/**
 * [typeof null, null instanceof Object]
 */
// 解析：
// typeof null 返回的是object是个由来已久的bug
// instanceof 运算符是用来测试一个对象在其原型链构造函数上是否具有 prototype 属性，null 值并不是以 Object 原型创建出来的
console.log([typeof null, null instanceof Object])

/**
 * [ [3,2,1].reduce(Math.pow), [].reduce(Math.pow) ]
 * 考察知识点
 * 1、Math.pow(x,y) x底数，y指数 返回x的y次幂
 * 2、array.reduce(function(total, currentValue, currentIndex, arr), initialValue) 累加器
 */
// 解析：
// 如果数组为空并且没有提供initialValue， 会抛出TypeError 。
// 如果数组仅有一个元素（无论位置如何）并且没有提供initialValue， 或者有提供initialValue但是数组为空，那么此唯一值将被返回并且callback不会被执行。
try {
    console.log([ [3,2,1].reduce(Math.pow), [].reduce(Math.pow) ])
} catch(e) {
    console.log(e)
}

// 解析：+的优先级比条件运算符的优先级高
var val = 'smtg';
console.log('Value is ' + (val === 'smtg') ? 'Something' : 'Nothing');


// 一个生成判断数据类型的方法的函数
// es5写法
// function isType(type) {
//     return function(target) {
//         return Object.prototype.toString.call(target) === '[object ' + type + ']'
//     }
// }

// es6写法
const isType = type => target => Object.prototype.toString.call(target) === `[object ${type}]`

const isArray = isType('Array')
console.log(isArray([]))
const isFunction = isType('Function')
console.log(isFunction(() => {}))