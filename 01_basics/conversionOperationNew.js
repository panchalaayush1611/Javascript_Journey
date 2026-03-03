let score = "18 abcd"
console.log(typeof score); // correct way
console.log(typeof(score)); // also a correct way, both are right

// ookay so when we have to convert, here's how, suppose here score is string and we want in number,

let inValueNew = Number(score) // we can use here String also instead of Number (according to our req)
console.log(typeof inValueNew);

// so here, what we have done, first of all we made new variable inValueNew then we have to convert into number datatype so we wrote "Number" like these to convert the score so we wrote score with it so it gets converted to number from the string

// let's create the scenario now let's write the abcd with 18 okay let's see what comes

console.log(inValueNew);

// it's giving NaN - Not A Number so it has to be string not number but ya it's JS, it is what it is.. means we should not relay on Number in JS

// so if we write Null as a value of score it will be 0 and if we write undefined it will give us the output as NaN and if we write true as a boolean it will give 1 and in false it will give 0

// and and if we write string "aayush" it will give NaN 

// imp note - while conversion in javascript we have to take care 

/* 
 "18" => 18
 "18abcd" => NaN
 true => 1
 false => 0
*/ 

// let isLoggedIn = 1 // o/p is true
// let isLoggedIn = "" // o/p is false
let isLoggedIn = "Aayush" // o/p is true (haha)
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


/* so if we write 1 => true; 0 => false; "aayush" => true; "" => false */

let someNum = 18
let strNum = String(someNum)
console.log(strNum);
console.log(typeof(strNum))


/* ------------------------- Operations ---------------------------- */

let value = 18
let negValue = -value
console.log(negValue);

let str1 = "virat"
let str2 = " kohli"
// console.log(str1 + " " + str2)  //way1
let str3 = str1 + str2 //way2
console.log(str3);

// new eg

console.log("1" + 2 + 2) // if the these type of thing is there so, here's in starting it's a string so it will consider others also as a string o/p is 122

console.log(1 + 2 + "2") // if the string is in last so it will do calculations normally as the before numbers are number to it will add and then joint that with last sting o/p is 32

console.log(true);