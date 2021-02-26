/*
 * @Author: xiongying
 * @Date: 2021-02-25 17:20:13
 * @Description: Babel学习
 */

const { async } = require("regenerator-runtime");

// "compiler": "babel src --out-dir lib --watch" —— 将src目录下的文件编译后输出到lib文件夹

// import '@babel/polyfill'; // babel7.4版本后已废弃


const fn = () => {
    console.log('hello, Babel')
}

const isHas = [1,2,3].includes(2);

const p = new Promise((resolve, reject) => {
    resolve(100);
});

console.log(isHas)

const fn1 = () => {

}

const testFn = ()=>{
    setTimeout(async ()=>{
        const a = await fn1()
        console.log(a)
    },3000)
}

testFn()