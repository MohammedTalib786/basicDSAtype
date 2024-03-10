// 34.	Write a function that returns the product of two given numbers. 
// Each product of a number can be found by multiplying it by another integer. Because 9 x 3 = 27, for example, 27 is a product of 9 and 3.
let prodNum1 = 2
let prodNum2 = 3
function productFunc(n1, n2) {
    console.log(n1 * n2)
}
// Run it => 
// productFunc(prodNum1, prodNum2)



// 41. Write a function that finds the product of all numbers from 1 to a given number.
// the product of number 123 is 6 (1*2*3=6); 
// another eg: (2*2*3=12) so, 223 is 12;
let prodNum = 2234;
function allProductFunc(n) {
    let nArr = n.toString().split('');
    let empt = [];
    for (let k of nArr) empt.push(Number(k));
    let res = eval(empt.join('*'));
    console.log(`The product of ${n} is ${res}`)
}
// Run it => 
// allProductFunc(prodNum)



// 45. Write a function that removes duplicate characters from a given string.
let dupArr = ['hello', 'hell', 'jell', 'hello', 'jell', 'pink'];
function removeDuplicates(arr) {
    console.log(arr)
    console.log(Array.from(new Set(arr)))
}
// Run it => 
// removeDuplicates(dupArr)



// 48. Write a function that finds the maximum number in an array of numbers.
let maxArr = [12, 34, 10, 3, 34, 5, 90, 45, 87];
function findMax(arr) {
    console.log(arr)
    console.log(Array.from(new Set(arr)).sort((a, b) => a - b).slice(-1).join(''))
}
// Run it => 
// findMax(maxArr)



// 49. Write a function that finds the minimum number in an array of numbers.
let minArr = [1, 4, 100, 3, 9, 5, 9, 345, 870];
function findMin(arr) {
    console.log(arr)
    console.log(Array.from(new Set(arr)).sort((a, b) => a - b).slice(0, 1).join(''))
}
// Run it => 
// findMin(minArr)



// 50. Write a function that finds the sum of all numbers in an array of numbers.
let arrOfNum = [2, 1, 4, 5]
function findSumOfArr(arr) {
    console.log(arr);
    let sum = 0;
    for (let k of arr) sum += k // sum = sum + k (as u know it!);
    console.log(sum);
}
// Run it =>
// findSumOfArr(arrOfNum)



// 61.	Write a function that converts a string to title case (capitalizes the first letter of each word).
let strToCap = "hello world how are you";
function getTitleCase(str) {
    console.log(str)
    let str1 = str.split(' ')
    let emp = [];
    for (let k of str1) emp.push(k.toUpperCase().slice(0, 1) + k.slice(1))
    console.log(emp.join(' '))
}
// Run it =>
// getTitleCase(strToCap)



// 62.	Write a function that finds the length of the longest word in a given string. 
let findLongStr = "Hello world how are you everything fine";
function findLongestFunc(str) {
    console.log(str)
    let arr = str.split(' ')
    let lengs = [];
    for (let k of arr) lengs.push(k.length);
    console.log(lengs.sort((a, b) => a - b).slice(-1).join())
}
// Run it =>
// findLongestFunc(findLongStr)


// 63.	Write a function that finds the median of an array of numbers.
// let medArr = [1, 2, 3, 4, 5]; // 15 / 5 = 3
let medArr = [10, 6, 4, 4, 6, 4, 1];
function getMedian(arr) {
    let reduce = arr.reduce((a, b) => a + b);
    let result = reduce / arr.length;
    console.log('The median of array', arr, 'is', result);
}
// Run it =>
// getMedian(medArr)



// Q4 => The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.
let password = 'PIUIUIU9Oi';
function thePasswordValidator(str) {
    // if (str.length >= 8 &&
    //     str.match(/[A-Z]/g) &&
    //     str.match(/[a-z]/g) &&
    //     str.match(/[0-9]/)
    // ) {
    //     console.log(str)
    // }
    // else {
    //     console.log('The password doesnt meet the following Criteria')
    // }
    return str.length >= 8 && str.match(/[A-Z]/g) && str.match(/[a-z]/g) && str.match(/[0-9]/) ? str : 'The password doesnt meet the following Criteria'
}
// Run it => 
console.log(thePasswordValidator(password))
