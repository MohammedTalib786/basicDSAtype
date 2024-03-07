// 16.	write a function that takes in an array of numbers and returns a new array with each number multiplied by 2.  
let arr = [1, 2, 3, 4, 5]
function newArr(array) {
    let emptyArr = []
    for (let k of array) {
        emptyArr.push(k * 2)
    }
    return emptyArr
}
// console.log(newArr(arr))


// 17.	Write a function that takes in an array of strings and returns a new array with each string capitalized (SOLVED)

let strArr = ['name', 'id', 'phone', 'pink']
function capitalized(arr) {
    let emptyArr = []
    for (let k of arr) {
        let cap = k.toUpperCase().slice(0, 1) + k.slice(1)
        emptyArr.push(cap)
    }
    return emptyArr;
}
// console.log(capitalized(strArr))


// 19.	Write a function that takes in a string and returns the string reversed. (SOLVED)


let str = 'Hello';
function reversedString(s) {
    return s.split('').reverse().join('')
}
// console.log(reversedString(str))



// 20.	Write a function that takes in an array of numbers and returns the average of the numbers. (SOLVED)

let arrNums = [1, 23, 3, 4, 5]
function findAverage(num) {
    let sum = 0
    for (let k of num) {
        sum += k
    }
    let calc = sum / num.length;
    return calc;
}
// console.log(findAverage(arrNums))


// 21.	Write a function that takes in an array of strings and returns a new array with each string reversed.  (SOLVED)

let arrOfStr = ['Hello', 'Madam', 'Join']
function reverseStringArray(arr) {
    let emp = []
    for (let k of arr) {
        let rev = k.split('').reverse().join('')
        emp.push(rev)
    }
    return emp;
}
// console.log(reverseStringArray(arrOfStr))


// 25.	Write a function that takes in an array of numbers and returns the largest number in the array.

let numsArr = [1, 2, 34, 5, 69, 90, 2, 15, 8, 91, 11]
function largestNumber(n) {
    return Array.from(new Set(n)).sort((a, b) => a - b).slice(-1).join('')
}
console.log(largestNumber(numsArr))
