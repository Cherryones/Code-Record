/*
 * @Author: xiongying
 * @Date: 2021-03-15 14:37:44
 * @Description: 驼峰转下划线
 */

// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
 
// // 获取输入内容
// function readLine() {
//   return new Promise(resolve => {
//     rl.on('line', str => {
//       resolve(str)
//     })
//   })
// }
// // 执行转换
// async function main() {
//   let inputs = await readLine();
//   while (+inputs !== 0) {
//       inputs = inputs.replace(/('|")(.+?)('|")/, $2 => $2.replace(/([A-Z])/g, "_$1").toLowerCase())
//       console.log(inputs);
//       inputs = await readLine();
//   }
//   rl.close()
// }

// main();

function transfer(str) {
  return str.replace(/((getColumns\(|id=)'|")(.+?)('|")/g, $2 => $2.replace(/([A-Z])/g, "_$1").toLowerCase())
}

let str = `
<strong>合计：</strong>总笔数：<em id="total">0</em>，交易金额：<em id="f4"><span class="text-red">0.00</span></em>
，转接清算费：<em id="clearingAmt"><span class="text-red">0.00</span></em>
，商户手续费：<em id="merFee"><span class="text-red">0.00</span></em>
，受理方应收手续费：<em id="recAmt"><span class="text-red">0.00</span></em>
，受理方应付手续费：<em id="payAmt"><span class="text-red">0.00</span></em>
，品牌服务费：<em id="brandFee"><span class="text-red">0.00</span></em>
，应到账：<em id="recvAmount"><span class="text-red">0.00</span></em>
，应到账费用：<em id="recvCost"><span class="text-red">0.00</span></em>
`
console.log(transfer(str))