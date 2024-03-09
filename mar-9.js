// 18.	Write a function that takes in a number and returns the factorial of that number. (not get it) 
let n = 4;
function factorial(n) {
    let ans = 1;

    if (n === 0) return 1;
    for (let i = 2; i <= n; i++) {
        ans = ans * i
    }
    return ans;
}
// console.log(factorial(n));



// 22.	Write a function that takes in an array of objects and returns a new array with the values of a specific property.
let arrayOfObj = [
    { name: 'Talib', age: 20, country: 'India' },
    { name: 'Aliza', age: 7, country: 'Pakistan' },
    { name: 'Iqra', age: 6, country: 'Uzbekistan' },
    { name: 'Pathaan', age: 45, country: 'Afghanistan' }
]
function getSpecificValue(arr) {
    console.log(arr)
    let newArray = [];
    for (let k of arr) newArray.push(k.age);
    console.log(newArray)
}
// Run it =>
// getSpecificValue(arrayOfObj)



// 24.	Write a function that takes in a string and returns true if the string is a palindrome, false otherwise. 
let palStr = 'madam';
function checkPailindrome(str) {
    return str === str.split('').reverse().join('');
}
// Run it =>
// console.log(checkPailindrome(palStr))



// 37. Write a function that checks if a given number is a multiple of 3. 
let num1 = 8;
function checkMultipleOfThree(n) {
    // console.log(n)
    if (n % 3 == 0) return true;
    else return false;
}
// Run it =>
// console.log(checkMultipleOfThree(num1))



// 38. Write a function that checks if a given number is a multiple of 5.
let num2 = 105;
function checkMultipleOfFive(n) {
    // console.log(n)
    if (n % 5 == 0) return true;
    else return false;
}
// Run it =>
// console.log(checkMultipleOfFive(num2))



// 39. Write a function that checks if a given number is a multiple of both 3 and 5.
let num3 = 15;
function checkMultipleOfThreeAndFive(n) {
    // console.log(n)
    if (n % 3 == 0 && n % 5 == 0) return true;
    else return false;
}
// Run it =>
// console.log(checkMultipleOfThreeAndFive(num3))



// 40. Write a function that finds the sum o all numbers from 1 to a given number.
let thatNum = 4;
function sumUpToNum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) sum += i
    console.log(sum)
}
// sumUpToNum(thatNum)




// Q13 => The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

let products = [
    { name: 'Monitor', price: 4600, quantity: 3 }, // 13800
    { name: 'Tablet', price: 23000, quantity: 1 }, // 23000
    { name: 'Mouse', price: 200, quantity: 6 }, // 1200
    { name: 'USB Cables', price: 100, quantity: 10 }, // 1000
    { name: 'Speakers', price: 600, quantity: 7 } // 4200
]; // 43200

function calculateTotal(arr) {
    let total = 0;
    for (let k of arr) {
        console.log(`${k.name} costs ${k.price * k.quantity} (ie: ${k.price} x ${k.quantity})`)
        total += k.price * k.quantity;
    }
    console.log(`The total cost is \$${total}.`)
}
// Run it =>
// calculateTotal(products)

