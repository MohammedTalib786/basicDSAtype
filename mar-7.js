// For a given array with prices of 5 items -> [250, 645, 300, 900, 50] All items have an offer of 10% OFF on them. Change the array to store final price after applying offer

let itemsPrices = [250, 645, 300, 900, 50];         // [225, 580.5, 270, 810 ,45]  || = 250 - 250 * 10  
function findFinalPrice(arr) {
    console.log(arr)
    let empty = [];
    arr.forEach(e => {
        let formulae = e - e * 10 / 100
        empty.push(formulae)
    });
    console.log(empty)
}
findFinalPrice(itemsPrices)