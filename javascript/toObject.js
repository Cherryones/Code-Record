/*
 * @Author: xiongying
 * @Date: 2021-03-10 16:06:21
 * @Description: 面向对象
 */

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


let obj = {
  _year: 2020,
  version: 1
}
// 访问器属性——year
Object.defineProperty(obj, 'year', { 
  get() {
    return this._year
  },
  set(val) {
    if (val > 2020) {
      this.version++
      this._year = val
    }
  }
})

obj.year = 2021 

console.log(obj)

let obj2 = {}

Object.defineProperties(obj2, {
  year: {
    value: 2020
  },
  version: {
    value: 1
  },
  _year: {
    get() {
      return this.year
    },
    set(val) {
      if (val > 2020) {
        this.year = val
        this.version++
      }
    }
  }
})
obj2.year = 3030
console.log(obj2.year) // 2020 在调用Object.defineProperty()时，configurable、enumerable和writable的值如果不指定，则都默认为false。

// 不使用对象解构
let person = {
  name: 'Matt',
  age: 27
};

// let personName = person.name,
//     personAge = person.age;

let {name: personName, age: personAge} = person
let name, age

({name, age} = person) // 不在变量定义时使用解构赋值，需要把语句包在括号里

console.log(personName); // Matt
console.log(personAge);  // 27

console.log(name); // Matt
console.log(age);  // 27


// 定义一个Person函数（普通函数/构造函数），自动生成一个prototype属性
// 函数的prototype属性指向 => 原型对象 => 原型对象包含 constructor属性、其他属性
// 原型对象的constructor属性 指回构造函数本身
// 实例指向原型对象


let Person = function() {
  this.age = 20
  this.say = function() {
    console.log('i am' + this.age)
  }
}

