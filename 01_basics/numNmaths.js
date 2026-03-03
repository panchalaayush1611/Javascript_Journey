// +++++++++++++++++++++++ Number ++++++++++++++++++++++++++++

// line number 60 formula is very very important


const balance = new Number(180.0000000101010)
console.log(balance)
console.log(balance.toString().length)

// let's use toFixed property

console.log(balance.toFixed(2)) // it will give 3 values are the decimal basically 3 zeroes, 180.000

const otherNumber = 178.2049
console.log(otherNumber.toPrecision(4)); // gives precise value!

// now the next is toLocaleString() property which adds (,) to the non , values like 1000000 its hard to get what the number is so it adds , there

const numm = 100000000
console.log(numm.toLocaleString()); // it will give in US format so to get in India format we have to do - 
console.log(numm.toLocaleString('en-IN')); // india format 





// +++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++


// Maths is a library which comes along with javascript and it's a very powerful library and important also

console.log(Math); // o/p - Object [Math] {}

console.log(Math.abs(-18)); // negetive value to positive

console.log(Math.round(4.69)) // take by it's own, MOSTLY USED

console.log(Math.ceil(4.69)) // take by our choice if i want bigger so use 'ceil', will choose 5 (highest)

console.log(Math.floor(4.29)) // take by our choice if i want smaller so use 'floor', will choose 4 (lowest)

console.log(Math.min(18, 10, 45)); // min

console.log(Math.max(18, 10, 45)); // max

console.log(Math.sqrt(25)); // square root

console.log(Math.PI);

console.log(Math.exp(5));

console.log(Math.random()); // gives random output between 0 and 1

console.log(Math.trunc(1.104720)); // removes the decimal values

// something new..
// for example if there are two variables min and max and min contains 10 and max 20 and we want that the value generates or came from 10 to 20 basically in between to there's a small imp formula

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

 






