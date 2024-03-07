// Q1 => Truncate the text
// let str = '1234567890000'
let str = 'hello world how are you!'

// console.log(str)
function truncateStr(s) {
    let trun = s.slice(0, 9) + '...';
    return trun;
}
// console.log(truncateStr(str))



// Q2 => Palindrome number
let num = 12121;

function isPalindrome(n) {
    return n < 10 ? false : n === Number(n.toString().split('').reverse().join(''))
}
// console.log(isPalindrome(num))
