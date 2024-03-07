// W => For Of Squared nums of an array

// let forArr = [10, 20, 40, 50, 20, 100];

// for (let k of forArr) {
//     console.log(k * k)
// }


// Q1 => Even Odd
// console.log('Even')
// for (let i = 10; i <= 40; i++) {
//     // console.log(i % 2 == 0)
//     // console.log(i)
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

// console.log('Odd')
// for (let i = 10; i <= 40; i++) {
//     if (i % 2 != 0) {
//         console.log(i)
//     }
// }


// Q2 => Checkpoints

// for (let i = 1; i <= 100; i++) {
//     if (i % 10 == 0) {
//         if (i == 50) {
//             console.log('HalfWay There!')
//             continue;
//         }
//         if (i == 100) {
//             console.log('You Made it!')
//             continue;
//         }
//         console.log('Checkpoint! ', i)
//     }
// }
// console.log('All Done!')





// Q3 => ages For Of

let ages = [10, 42, 15, 22, 11, 74, 39, 2]
// let results = []
// console.log(results)

// for (let k of ages) {
//     // console.log(k)
//     let res = { age: k, name: 'Dragon' }
//     results.push(res)
// }
// console.log(results)




// Q4 => Names in Caps using for of (used not set but normal arrays)

// let names = []
// let capNames = []
// names.push('bilbo', 'hermione', 'spock', 'liela');
// for (let k of names) {
//     // console.log(k)
//     capNames.push(k.toUpperCase().slice(0, 1) + k.slice(1))
// }
// console.log(names)
// console.log(capNames)





// Q5 => Using Maps with for of

let backpack = new Map([
    [1, { name: 'Sword', value: 300 }],
    [2, { name: 'Banana', value: 5 }],
    [3, { name: 'Gold Nugget', value: 10000 }],
    [4, { name: 'Pants', value: 100 }]
])

// console.log(backpack)
// let total = 0;
// for (let k of backpack) {
//     // console.log(k)
//     console.log(`${k[1].name}: \$${k[1].value} `)
//     total += k[1].value
// }
// console.log(`The total is: ${total}`);
