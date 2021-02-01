/*
 * @Author: xiongying
 * @Date: 2021-02-01 14:02:07
 * @Description: 算法相关
 */


/**
 * 给出一组字符串数组，取出最长的公共前缀
 * eg: ['length', 'legal', 'large'] => l
 */

// 方法一
// 核心思想：取数组第一个字符串作为起始参照，遍历数组，取下一个字符串进行二次遍历，取出公共前缀
// 时间复杂度：O(s) s是所有字符串中字符的总和
// 空间复杂度：O(1)
 function getCommonPrefix_v1(arr) {
    if (!Array.isArray(arr)) return ''
    let initStr = arr[0]
    for (let i = 1; i < arr.length; i++) {
        let j = 0
        for (; j < arr[i].length && j < initStr.length; j++) {
            if (arr[i].charAt(j) !== initStr.charAt(j)) {
                break
            }
        }
        initStr = arr[i].substring(0, j)
    }
    return initStr
}

console.log(getCommonPrefix_v1(["flower","flow","flight"])) // "fl"
console.log(getCommonPrefix_v1(["dog","racecar","car"])) // ""


// 方法二
// 核心思想：直接取最小字符串和最大字符串的公共前缀
// 时间复杂度：O(n+m) n是数组的长度， m 是字符串数组中最短字符的长度
// 空间复杂度：O(1)

// ps：此处涉及一知识点——字符串比较大小
// 比较的时候，从字符串左边开始，一次比较每个字符，直接出现差异、或者其中一个串结束为止。
// 比如ABC与ACDE比较，第一个字符相同，继续比较第二个字符，由于第二个字符是后面一个串大，所以不再继续比较，结果就是后面个串大。
// 再如ABC与ABC123比较，比较三个字符后第一个串结束，所以就是后面一个串大。
// 所以，长度不能直接决定大小，字符串的大小是由左边开始最前面的字符决定的。
function getCommonPrefix_v2(arr) {
    if (!Array.isArray(arr)) return ''
    let min = 0
    let max = 0
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[min]) min = i
        if (arr[i] > arr[max]) max = i
    }
    for (let j = 0; j < arr[min].length; j++) {
        if (arr[min].charAt(j) !== arr[max].charAt(j)) {
            return arr[min].substring(0, j)
        }
    }
    return arr[min]
}

console.log(getCommonPrefix_v2(["flower","flow","flight"])) // "fl"
console.log(getCommonPrefix_v2(["dog","racecar","car"])) // ""