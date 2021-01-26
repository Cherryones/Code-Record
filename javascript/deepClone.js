/*
 * @Author: xiongying
 * @Date: 2021-01-25 14:03:20
 * @Description: 深浅拷贝
 */

// 基本类型拷贝——对值复制
let a = 2
let b = a
b = 3
console.log(a, b) // 2,3

// 引用类型拷贝
// 1、浅拷贝——对引用类型的地址拷贝，两个变量指向同一个内存地址，此时修改其中一个值，会对另一个值产生影响
let c = {
    age: 25,
    obj: {
        name: 'xx'
    },
    fn() {
        return this.age + 1
    }
}
let d = c
d.age = 24
d.obj.name = 'xy'
console.log('***********浅拷贝*************')
console.log(c.age, d.age) // 24,24
console.log(c.obj.name, d.obj.name) // xy,xy
console.log(c.fn(), d.fn()) // 25, 25
console.log('***********浅拷贝*************')

// 一个浅拷贝的方法，实际上可以直接用 = 赋值，就是浅拷贝
function shallowClone(obj) {
    let target = {}
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) { 
            target[key] = obj[key]
        }
    }
    return target
}

// 2、深拷贝
// 1) 拓展运算符，只能对一层对象进行深拷贝，嵌套的对象，深拷贝会失效
// let e = {...c}
// e.age = 11
// e.obj.name = 'cc'
// console.log('***********深拷贝*************')
// console.log(e.age, c.age) // 11,24
// console.log(e.obj.name, c.obj.name) // cc,cc
// console.log(e.fn(), c.fn()) // 12, 25
// console.log('***********深拷贝*************')

// 2) JSON.stringify 可以对多层对象进行深拷贝，但是对方法属性会失效
// let e = JSON.parse(JSON.stringify(c))
// e.age = 11
// e.obj.name = 'cc'
// console.log('***********深拷贝*************')
// console.log(e.age, c.age) // 11,24
// console.log(e.obj.name, c.obj.name) // cc,xy
// // console.log(e.fn(), c.fn()) // TypeError: e.fn is not a function
// console.log('***********深拷贝*************')

// 3) 一个深拷贝的方法
function deepClone(obj) {
    if (Array.isArray(obj)) return [...obj] 
    if (!isObject(obj)) return obj // 校验参数
    let target = {}
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) { // 不使用obj[key]判断而使用hasOwnProperty，目的是忽略继承属性，只读取对象自身的属性
            if (isObject(obj[key])) { // 不使用typeof校验是否是对象，不准确
                target[key] = deepClone(obj[key])
            } else {
                target[key] = obj[key]
            }
        }
    }
    return target
}
// 判断是否是对象的方法（严谨版）
function isObject(arg) {
    return Object.prototype.toString.call(arg) === '[object object]'
}
let e = deepClone(c)
e.age = 11
e.obj.name = 'cc'
console.log('***********深拷贝*************')
console.log(e.age, c.age) // 11,24
console.log(e.obj.name, c.obj.name) // cc,xy
console.log(e.fn(), c.fn()) // 12, 25
console.log('***********深拷贝*************')


// 数组的情况
let arr = [1,2,3]
// let arr1 = arr
let arr1 = deepClone(arr)
arr1.push(4)
console.log(arr1, arr)

// 自定义深度和广度的对象
function creatObj(deep, breadth) {
    let data = {}
    let temp = data
    for (let i = 0; i < deep; i++) {
        temp = temp['data'] = {}
    }
    return data
}

console.log(creatObj(4))
