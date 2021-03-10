/*
 * @Author: xiongying
 * @Date: 2021-03-10 16:06:21
 * @Description: 面向对象
 */

// const { resolve, reject } = require("core-js/fn/promise")


//  构造函数
function Point(x, y) {
  this.x = x
  this.y = y
}

Point.prototype.add = function() {
  return this.x + this.y
}

let test1 = new Point(1, 2)

console.log(test1.add())

// 面向对象
class Student {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  print() {
    console.log( 'my name is ' + this.name + ', I am ' + this.age )
  }
}

let stu = new Student('xiongying', '24')
let s1 =  new Student()
stu.print()

console.log(
  typeof Student,
  Student.prototype.constructor === Student,
  typeof s1, // new 一个对象
  stu.__proto__ === s1.__proto__,
  s1 === stu
)

// function a(a) {
//   if (a === 1) {
//     return 1
//   }
//   if (a === 2) {
//     return 2
//   }
//   else return 3
// }
// console.log(a(2))

// function b() {
//   return function() {
//     console.log(123)
//   }
// }
// b()()

// function c() {
//   return new Promise((resolve, reject)=>{
//     resolve(666)
//   }).then(res=>{
//     console.log(res)
//   })
// }
// c()