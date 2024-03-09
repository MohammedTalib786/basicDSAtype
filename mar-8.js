// Q8 => Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 (2000) milliseconds.
let arrayMap = [2, 4, 5, 6, 7, 8, 10]
async function arrayMapping(arr) {
    console.log(arr)
    return new Promise((res, rej) => {
        let result = arr.map(e => e * 2)
        setTimeout(() => res(result), 500)
    }).then(v => console.log(v))
}
// => Run it:
// arrayMapping(arrayMap)



// Q9 => The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.
const placeOrder = async () => {
    return new Promise((res, rej) => {
        let msg = 'Your Order has been Placed!';
        let random = Math.floor(Math.random() * 5)
        console.log(random)
        setTimeout(() => res(msg), random * 1000)
    })
        .then(v => console.log(v))
}
// => Run it:
// placeOrder()



// Q10 => The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.
let myCoffee = ['Cold brew', 'Café au lait', 'Cortado', 'Frappuccino', 'Black Coffee'];
const brewCoffee = async (arr) => {
    let random = (1 + Math.floor(Math.random() * 5))
    return new Promise((res, rej) => {
        let msg = `Your Order ${arr[Math.floor(Math.random() * 5)]} is Ready!`;
        setTimeout(() => res(msg), random * 1000)
    }).then(v => console.log(v))
}
// => Run it:
// brewCoffee(myCoffee)



// 9.	Write a function that takes in an object and returns the number of properties in the object. 
let Obj = { name: 'Talib', age: 20, add: 'Kurla', country: 'India', }

function getObj(obj) {
    delete obj.add;
    let emp = []
    for (let k in obj) emp.push(k);
    console.log(emp.length)
}
// getObj(Obj)



// 17.	Write a function that takes in an array of strings and returns a new array with each string capitalized (SOLVED)
let strForCaps = ['hello', 'world', 'how', 'are', 'you'];
function getCapitalized(arr) {
    console.log(arr);
    let emp = [];
    for (let k of arr) emp.push(k.toUpperCase().slice(0, 1) + k.slice(1));
    console.log(emp)
}
// Run it =>
getCapitalized(strForCaps)

