// if condition
// if condition is true then it will go inside the if block or else it is false then it skips the if block

// if (true_condition) {
//   // true_block
// }

// // if..else

// if (true_condition) {
//   // true_block
// } else {
//   // false_block
// }

// if (2 === "2") { // === checks everything like value, datatype and all
//   console.log("executed");
// }
// else{
//     console.log("false");
// }

// var has global scope so use let and const
// let and const has scope as per it's {}
// const score = 1800
// if (score > 1500) {
//     const power = "fly"
//     console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`);

const isLoggedIn = true
const debitCard = true

if (isLoggedIn && debitCard) { // && means both should be true to get executed
    console.log("Allowed for purchase!");
    
} else {
    console.log("Not allowed!");
}

const loggedFromGoogle = false
const loggedFromGmail = true

if (loggedFromGmail || loggedFromGoogle) { // || means one should be true
    console.log("Valid Login details!");
    
} else {
    console.log("Invalid Login details");
}