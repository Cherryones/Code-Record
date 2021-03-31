

/*
 * @Author: xiongying
 * @Date: 2021-03-29 16:50:04
 * @Description: 给你一个整数 n ，请你返回所有 0 到 1 之间（不包括 0 和 1）满足分母小于等于  n 的 最简 分数 。分数可以以 任意 顺序返回。
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function(n) {
  if (n < 2) {
    return []
  }
  let arr = []
  for (let i = 2; i < n + 1; i++) {
    for (let j = 1; j < i; j++) {
      if (getDivisor(j, i) === 1) {
        arr.push(`${j}/${i}`)
      }
    }
  }
  return arr
};
// 获取最大公约数
function getDivisor(m, n) {
  if (m % n === 0) return n
  return getDivisor(n, m % n)
}
console.log(simplifiedFractions(10))