// Q1 => The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

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
// magicalSortingHat(studentArray)



// Q2 => The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

// let doubleElems = [1, 'hello', 3, 8, 'world', 78, 90, 10]
// let doubleElems = [1, 3, 3, 38, 90, 78, 90, 10, 10, 38, 50, 40]
let doubleElems = [1, 3, 3, 10]
function doubleTrouble(arr) {
    console.log(arr)
    let set = Array.from(new Set(arr))
    arr.forEach(elem => {
        set.push(elem)
    })
    console.log(set.sort((a, b) => a - b))
}
// Run it:
// doubleTrouble(doubleElems)



// Q3 => The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

let mirrorString = 'Madam';
function theMirrorMirror(str) {
    console.log(str, '=', str.split('').reverse().join(''))
}
// Run it:
// theMirrorMirror(mirrorString)



// Q5 => The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

let sumArray = [1, 34, 67, 89, 30, 40];
// let asi = [10, 20, 10]
function theSumSelector(arr) {
    let sumNo = 0;
    arr.forEach(elem => sumNo += elem)
    console.log(sumNo)
}
// Run it:
// theSumSelector(sumArray)