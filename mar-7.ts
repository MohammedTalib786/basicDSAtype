// Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length. eg: user name = “shradhakhapra” , username should be “@shradhakhapra13”

let username = 'Shaikh Mohammed Talib'
function generateUser(str) {
    console.log(str)
    let getUser = str.trim().replace(/\s+/gi, '')
    console.log(`@${getUser}${getUser.length}`)
}
// Run it:
// generateUser(username)



// For a given array with marks of students -> [85, 97, 44, 37, 76, 60] Find the average marks of the entire class.

let studentMarks = [85, 97, 44, 37, 76, 60];        // 399/6 = 66.5%
// let studentMarks = [1, 2, 3, 4, 5];        // 15/5 = 3%
function findAverage(arr) {
    let sum = 0;
    arr.forEach(e => sum += e);
    let res = sum / arr.length;
    console.log(`${res}%`)
}
// findAverage(studentMarks)










