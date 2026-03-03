/* very very common comparision operators in programming

console.log(18 > 10)
console.log(45 >= 18)
console.log(45 < 18)
console.log(45 <= 18)
console.log(45 == 18)
console.log(45 != 18) */

// console.log("2" > 1);
// console.log("02" > 1);
// console.log(2 > "1");


console.log(null > 0)
console.log(null >= 0)
console.log(null < 0)
console.log(null <= 0)
console.log(null == 0) // basically this is equality check

// answer explanation - here js considers null as 0 so 0 > 0 is false and 0 >= 0 is true as per the condition and yes 0 == 0 is also false here

// using these type of things and code in JS or in any programming, it's like madness specially in JS becuase it's little bit complicated language

// NOTE NOTE that JAVASCRIPT is a language in which predictible result might not come

console.log(undefined == 0); // basically this is equality check
console.log(undefined >= 0);
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined <= 18);

// imp note - if we compare "undefined" using any operators with 0 or with any number it will definitely give false as a answer

// so

console.log("2" == 2); // seems true right 

// but 

console.log("2" === 2); // this (===) is strict check, so it strictly checks the value and datatypes also so the answer would be false, it will not perform conversion because it checked that is's === so it will check if same datatype then yes if not then it will give false

