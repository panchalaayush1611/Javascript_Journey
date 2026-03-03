let score = "18vk"

console.log(typeof score);  // simple we can write like these also np!
console.log(typeof (score));    // called method use

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); // o/p is NaN means "Not a Number"

// "18" - it converts number using that Number() 
// "18vk" - it gives NaN in o/p (Not a Number) but the type of NaN is Number coz it's js haha!
// true - 1
// false - 0

// these are basic conversions!

let isLoggedIn = true
console.log(isLoggedIn);

let booleanIsLoggedIn = Boolean(isLoggedIn)     // this is called conversion in js
console.log(booleanIsLoggedIn)  

// true - 1
// false - 0
// if we leave empty string like - "" then it shows false (0)
// but if we write something in "RCBop" then it shows true (1)

// we can convert into string also, let's check it out!

let someNumber = 18

let stringNumber = String(someNumber)
console.log("value is",stringNumber)
console.log("type is",typeof stringNumber)

// there are more ways to to do conversion with other datatypes like object, arrays, etc but will check further!

// ****************************************** OPERATIONS ***************************************************

let value = 3
let negValue = -value // can perfrom +,- and increment (--) and decrement (++) also like this
console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)   // in power form!
// console.log(2/2)
// console.log(2%2)

let str1 = "Hello"
let str2 = "Professor" // can write like - " Professor" if don't want to include space while concatination
let str3 = str1 + " " + str2
console.log(str3)

let gameCounter = 100
gameCounter++
console.log(gameCounter)