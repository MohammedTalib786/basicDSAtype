// Q1 => The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names. (SOLVED!)

let studentArray = ['paul', 'steven', 'steve roggers', 'kyle walker', 'paul walker', 'brock lesnar', 'john cena', 'rock'];
function magicalSortingHat(arr) {
    for (let i = 0; i < arr.length; i++) {
        // console.log(i)
        // console.log(arr[i])
        if (arr[i].length < 6) {
            console.log(`${arr[i]} =  Gryffindor`)
        }

        else if (arr[i].length < 8) {
            console.log(`${arr[i]} =  Hufflepuff`)
        }

        else if (arr[i].length < 12) {
            console.log(`${arr[i]} =  Ravenclaw`)
        }

        else if (arr[i].length >= 12) {
            console.log(`${arr[i]} =  Slytherin`)
        }
    }
}
// Run it:
magicalSortingHat(studentArray)




// Q2 => The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them. (SOLVED!)

let array = [1, 2, 3, 3, 3, 3, 4, 4, 5, 5, 6, 7]
function douobleTrouble(arr) {
    console.log(`Main Array: `, arr)
    let set = Array.from(new Set(arr))
    set.forEach(e => {
        set.push(e)
    })
    console.log(`Output Array: `, set)
}
// douobleTrouble(array)





// Q3 => The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself. (SOLVED!)

let str1 = 'madam'
let str2 = 'lip'
let str3 = 'lip and pil'
function mirrorMirror(str) {
    let code = str.split('').reverse().join('')
    console.log(`Original: ${str} => Reveresed: ${code}`)
}
// mirrorMirror(str1)
// mirrorMirror(str2)
// mirrorMirror(str3)




// Q4 => The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.  (SOLVED!)


let aPassword = 'bibI9op0'
function passwordValidator(str) {
    try {
        let num = /[0-9]/g
        let upper = /[A-Z]/g
        let lower = /[a-z]/g
        if (str.length >= 8 &&
            str.match(num) &&
            str.match(upper) &&
            str.match(lower)) {
            return str
        }
        else {
            throw new Error('at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.')
        }
    } catch (err) {
        return err.message
    }
}
// console.log(passwordValidator(aPassword))



// Q5 => The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation. (SOLVED!)

let sumArray = [1, 2, 3, 4, 5, 5]
function sum(arr) {
    // method 1
    // let main = arr.reduce((a, b) => {
    //     return a + b;
    // })
    // console.log(main)

    //method 2
    let Sum = 0;
    for (let k of arr) {
        // Sum = Sum + k;
        // Or
        Sum += k;
    }
    console.log(Sum)
}
// sum(sumArray)




// Q6 => The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels. (SOLVED!)

let vowelString = 'HeLlO wOrRd HoW Are yOu'
function vowelCounter(str) {
    let regex = /[aeiou]/gi
    let count = str.match(regex).length
    console.log(str)
    console.log(`Number of Vowels: ${count}`)
}
// vowelCounter(vowelString)




// Q7 => The Local Storage Manager: You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.



// Q8 => Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds. (SOLVED!)

let arrMaping = [1, 2, 3, 4, 5]
const arrayMapping = async (arr) => {
    return new Promise((res, rej) => {
        console.log(arrMaping)
        setTimeout(async () => {
            let emptyArray = []
            for (let k of arr) {
                emptyArray.push(k * 2)
            }
            res(emptyArray)
        }, 500)
    })
        .then(v => console.log(v))
        .catch(e => console.log(e.message))
}
// arrayMapping(arrMaping)





// Q9 => The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay. (SOLVED!)

const placeOrder = async () => {
    let random1 = Math.floor(Math.random() * 1 + 1)
    let random2 = Math.floor(Math.random() * 4 + 1)
    let randomInt = random1 + random2;
    console.log(`Will Take ${randomInt} Seconds`)
    return await new Promise((res, rej) => {
        setTimeout(() => {
            let ran = Math.floor(Math.random() * 5)
            let messages = [
                'Your Order is Placed!',
                'Thanks For Ordering!',
                'Thank You for Shopping with Us!',
                'Checkout Done! Your Order will be Placed Soon.',
                'Visit Us Again!'
            ][ran]
            res(messages)
        }, randomInt * 1000)
    })
        .then(v => console.log(v))
        .catch(e => console.log(e))
}
// placeOrder()



// Q10 => The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.(SOLVED!)

let coffeeName = 'Flat White'
const brewCoffee = async (coffee) => {
    return new Promise((res, rej) => {
        let random1 = Math.floor(Math.random() * 2 + 1)
        let random2 = Math.floor(Math.random() * 4 + 1)
        let randomNumber = random1 + random2
        console.log(`Your Coffee will be Served after ${randomNumber} Seconds`)
        setTimeout(() => {
            let msg = `Your ordered ${coffee} coffee is Ready!`
            res(msg)
        }, randomNumber * 1000)
    })
        .then(v => console.log(v))
        .catch(err => console.log(err.message))
}
// brewCoffee(coffeeName)





// Q13 => The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost. (SOLVED!)

let products = [
    { name: 'Orange', price: 20, quantity: 3 },
    { name: 'Cheese', price: 350, quantity: 2 },
    { name: 'Lemon', price: 5, quantity: 30 },
    { name: 'Pulses', price: 160, quantity: 3 },
    { name: 'Rice', price: 65, quantity: 15 }
]
function calculateTotal(arr) {
    let sumPrice = 0
    let sumQnt = 0
    let totalSum = 0
    for (let k of arr) {
        console.log(`${k.name} => price: ${k.price} => quantity: ${k.quantity}`)
        sumPrice += k.price // both methods are same += and var = var + cond
        sumQnt = sumQnt + k.quantity // both methods are same += and var = var + cond
        totalSum = sumPrice * sumQnt
    }
    console.log(`Total Price = ${sumPrice} - Total Quantity = ${sumQnt}`)
    console.log(`Total Cost: ${totalSum}`)

}
// calculateTotal(products)



// Q14 => The Window Scroller: You are developing a single-page application with a smooth scrolling effect. Implement a function named smoothScrollToTop that smoothly scrolls the window to the top when called. (Made it already)