// truthy and flasy values means we just assume that this is false and that is true, there are specified truthy and falsy values in javascript and they are - 

// Truthy Values - "0", "somethingInStringisTruthy", 'false', [], {}, " ", function(){}

// Flasy Values - false, 0, -0, null, NaN, undefined, "", bigInt 0n

// how to check empty object 

// const emptyObject = {}
// if(Object.keys(emptyObject).length === 0){ // here Object.keys() will give in form of array and then we just check by length just like in array we do
//     console.log("empty Object");
// }


// NOC != TERNARY OPERATOR

// Nullish Coalescing Operator [NCO] (??)
// NCO is totally on 'null' and 'undefined'
// NCO is made for null and undefined only

// let var1;
// var1 = 5 ?? 10
// var1 = null ?? 10
// var1 = undefined ?? 20
// console.log(var1);


// Ternary Operator - condition ? true : false
const teaPrice = 15
teaPrice >= 10 ? console.log("yes it is..!") : console.log("no less than!");

