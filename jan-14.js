// console.log(2)
// 28.	Write a function that takes in a string and returns a new string with all the vowels removed. (SOLVED)


let stringey = 'Hello World Casey AbcdefghIOpP';

function vowelsRemoved(str) {
    let regex = /[aeiou]/gi
    return str.replace(regex, '')
}
// console.log(vowelsRemoved(stringey))


// 29.	Write a function that takes in an array of numbers and returns a new array with all the numbers sorted in ascending order. (SOLVED)


let array = [1, 4, 2, 78, 5, 7, 98, 56, 34];

// console.log(array)

function sorted(arr) {
    return arr.sort((a, b) => a - b);
}

// console.log(sorted(array))


// 52.	Write a function that checks if a given string is a pangram (contains every letter of the alphabet). (Not Solved)

let str1 = 'qwertyuibicewvpohncewqogh'
let str2 = 'abcdefghijklmnopqrtuvwxyz'

let str3 = 'abeipov'
let regex = /[aeiou]/gi
// console.log(regex)

console.log(str3.match(regex))

// function checkPangram(str) {

// }
// console.log(checkPangram(str1))

