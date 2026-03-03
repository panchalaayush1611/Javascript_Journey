// Arrays PART-1



// js arrays are resizeable
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const myArray = [0, 1, 18, 3, 4, 5] // in array you can take any type of element like number, boolean, string and all it's okay to take different type of values in array

console.log(myArray);

// other ways to declare an array

const cricket = ["virat", "rohit", "hardik"]
// console.log(cricket);


const myArray2 = new Array("aayush", "panchal") // here no need to declare in []
// console.log(myArray2);

// array methods

myArray.push(6,199) // adds value in existing array! PUSH for addition
myArray.pop() // deletes the value from the existing array, POP for subtraction but but no value we put in pop because POP deletes the last value from the array not our choiced value, 199 removed
myArray.pop() // 6 removed and so on you can do
// myArray.unshift(18, 9000) // basically adds values in strting of the array
myArray.shift() // 0 from our given array is removed

// console.log(myArray.includes(18));

// console.log(myArray.indexOf(18)) // not clear yet

const newArr = myArray.join()

// console.log(newArr); // basically it converts the array into string format
// console.log(typeof newArr);


// console.log(myArray);

// slice and splice

// slice - instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

console.log("A" ,myArray)
const myn1 = myArray.slice(1, 4); // okay got it in slice start here is 1 and end is 4 (end will be calculated) so start would be 18 and end not gonna calulate so till 4 would be printed so 18, 3, 4
console.log(myn1);

// splice - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// splice concept is not cleared!, slice is cleared

console.log("B" ,myArray)
const myn2 = myArray.splice(1, 4);
console.log(myn1);
console.log(myn2);




