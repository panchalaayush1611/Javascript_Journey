// there are two types of datatypes PRIMITIVE and NON-PRIMITIVE (Reference)

/* Primitive Datatypes 

String, 
Number, 
Boolean, 
Null (null means empty not zero), 
Undefined (variable is declared but the value is not assigned)
Symbol (used to make any value unique)
BigInt */

/* Non-Primitive (also called Reference)

Array,
Objects, 
Functions */

// note the return type of non primtive datatypes are "object fucntion or object" for function and for other two they are object 
// return typeof array and objects are "object" and the return type of function is object function


// array
const cricHeros = ["virat", "rohit", "shubhman"] 

// objects are written in curly braces {} they are objects written in key value pair
let myObj = {
    name: "Aaaayush",
    // age= 25
}

// function  
const myFunc = function(){
    console.log("hello world");
}

// if we use typeof operator this are the results

// Type	    Result
// Undefined	"undefined"
// Null	    "object" (reason)
// Boolean	    "boolean"
// Number	    "number"
// BigInt	    "bigint"
// String	    "string"
// Symbol	    "symbol"
// Any other   "object"
// object	
// Function (implements [[Call]] in ECMA-262 terms; classes are functions as well)	    "function"

// delcaring Symbol

const id = Symbol('18')
const newId = Symbol('18')
// console.log(id === newId);

// bigint 

const bigIntNum = 8472345678987n // writing 'n' at the end of the value can make the number to BigInt
// console.log(typeof(bigIntNum));
// console.log(bigIntNum);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// so here we are going to talk about memormy

// Stack (in Primitive) and Heap (in Non-Primitive)
// stack give copy of that value and heap give reference

let myNameYT = "ap18"
let anotherNameYT = myNameYT
anotherNameYT = "aaayyush"
console.log(myNameYT);
console.log(anotherNameYT);


// this concept is not done yet! stack and heap memory! i have to do more to get clear about this topic!
