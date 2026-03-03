// Arrays PART-2

//  https://www.google.com/search?q=what+are+the+important+array+prototypes+in+javascript&rlz=1C5CHFA_enIN1083IN1083&oq=what+are+the+important+array+proto&gs_lcrp=EgZjaHJvbWUqBwgDECEYoAEyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIGCAQQIRgVMgcIBRAhGJ8FMgcIBhAhGJ8FMgcIBxAhGJ8FMgcICBAhGI8CMgcICRAhGI8C0gEIOTQ1MWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8


// Array.isArray(arr); // ✅ Recommended
// arr instanceof Array; // Also works
// typeof arr; // Returns "object" ❌ Not accurate



const cric_heros = ["virat", "rohit", "jaisu"]
const esports_heros = ["scout", "goblin", "nakul"]

// cric_heros.push(esports_heros)
// console.log(cric_heros);
// console.log(cric_heros[3][0]); // will return scout means here esports_heros becomes the third value of an cric_heros array! so when we want the values of that third array we have to write like this if we written [3][2] it will return nakul, but it's a bakwasss!

// when we have to merge we can do concat 

// const conCat = cric_heros.concat(esports_heros) 
// console.log(conCat); // here now two arrays gets merged into one

// other than this concat funct there's another way to do this type of operation that is SPREAD Operator, basically it's like you have a glass cup and then you drop it to floor and it gets spread into pieces right!

const spread_arrays = [...cric_heros, ...esports_heros] // commonly used method instead of string concat
//console.log(spread_arrays);

// something different "flat()" The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const another_array = [1,2,3,[4,5,7],10,11,[72,18, [10,12]]]
const real_flat = another_array.flat(Infinity) // here infinity is depth you can give number also but this will look by it's own that how many other arrays are there inside this, cool!
console.log(real_flat);


// now "isArray" and "from" means it will convert into at that time

console.log(Array.isArray("Aayush")) // return false because there's no array name of Aayush not i have to convert this into array so i have to use "from", currently it's type is boolean because it will give true or false

console.log(Array.from("Aayush")) // converted into array, type is object, don't know why.. haha

console.log(Array.from({name : "Aayush"})); // it will be interesting output because it will give empty array because we have to decalre that i have to give array to key or to give to the value, here i have given to whole array so it's giving empty array [], so we have to make array with keys or the values

// now "Array.of" instead of using from use this because it returns a new array from a set of elements


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // it will convert that number into array


// doing this type of bkc does array into array means it creates bhasad and confusion 
