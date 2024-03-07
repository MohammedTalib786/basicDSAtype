// 11.	Write a function that takes in a string and returns true if the string is empty, false otherwise.
let stringey = 'This is a String'
function checkString(str) {
    return str.length == 0 ? true : false
}
// console.log(checkString(stringey))



// 12.	Write a function that takes in an array and returns true if the array is empty, false otherwise.
let array = []
function checkArray(arr) {
    return arr.length == 0 ? true : false
}
// console.log(checkArray(array))


// 13.	Write a function that takes in an object and returns true if the object is empty, false otherwise.
let objectT = {}
function checkObj(obj) {
    let emptyArr = []
    for (let k in obj) {
        emptyArr.push(k)
    }
    return emptyArr.length == 0 ? true : false;
}
// console.log(checkObj(objectT))



// 14.	Write a function that takes in an array of numbers and returns the sum of the numbers.
let nums = [4, 5]
function sumArray(arr) {
    let sum = 0;
    for (let k of arr) {
        sum += k
    }
    return sum
}
// console.log(sumArray(nums))


// 15.	Write a function that takes in an array of strings and returns the length of the longest string.

let strArrs = ['hello', 'jello', 'hello world', 'bcviweb vf9 wviocwbvewjb ', 'jello world', 'jelloo', 'pi', 'etc']

function findLargestStringLength(ar) {
    let emptyArr = []
    for (let k of ar) {
        emptyArr.push(k.length)
    }
    let newArr = Array.from(new Set(emptyArr))
    newArr.sort((a, b) => a - b)
    let slc = newArr.slice(-1)
    let main = slc.join('')
    return main
}
// console.log(findLargestStringLength(strArrs))





// Second Largest Number
let numsOfArr = [1, 2, 6, 3, 9, 3, 9, 4, 0, 2, 3]
// console.log(numsOfArr)
function secondLargestNumber(arr) {
    let unique = Array.from(new Set(arr))
    unique.sort((a, b) => a - b)
    let slc = unique.slice(-2).slice(0, 1)
    let main = slc.join('')
    return main
}
// console.log(secondLargestNumber(numsOfArr))


