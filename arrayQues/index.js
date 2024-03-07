// Q1 => Second Largest number (Arrays)
let arr = [2, 56, 2, 34, 6, 81, 101, 90, 89, 90];
let arr2 = [2, 4, 1, 1, 5, 2, 7, 8, 4, 7, 1, 3, 4, 9, 8]
// console.log(arr)
function getSecondLargest(a) {
    let dupRem = Array.from(new Set(a)).sort((a, b) => a - b).slice(-2, -1);
    return dupRem;
}
// console.log(getSecondLargest(arr2))



// Q3 => Remove Duplicates (Arrays)
// console.log(arr2)
// console.log(arr2.length)
function removeDups(a) {
    let get = Array.from(new Set(a)).sort((a, b) => a - b)
    console.log('Array: ', get, 'Length of the array: ', get.length)
}
// removeDups(arr2)
