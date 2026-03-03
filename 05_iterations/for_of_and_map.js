// these loops are Array Specified loops...!
// 'for in', 'for of', 'for each' loops

// for of loop ~ creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on) ~
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  // here the object is something different, not that 'JS Object', on what i have to apply the loop, here i wanted on 'arr'
  // we can apply on strings also, no object needed only
  console.log(num);
}

const greeting = "Morgen";
for (const greet of greeting) {
  if (greet == "r") {
    break;
  }
  console.log(`Each char is ${greet}`);
}

// MAP - it used for iterations and it has UNIQUE VALUES in it, MAP is OBJECT itself, MAP has key-value pair and remembers the original insertion order of the keys while objects don't so we use MAP, no duplicate values in it, all are unique

const map = new Map()
map.set('IN', 'INDIA')
map.set('FR', 'FRANCE')
map.set('GER', 'GERMANY')
map.set('IN', 'INDIA') // will not repeat, only uniques are allowed
// console.log(map);

// let's print using an Array

for (const [key,value] of map) {
    console.log(key, ':-', value);
}


// what if i have object, can we apply to for_of loop

// const myObject = {
//     'game1' : 'BGMI',
//     'game2' : 'NFS'
// }

// for (const objVal of myObject) {x
//     console.log(objVal);
// }

// "IT WILL NOT WORK, BECAUSE OBJECT IS NOT ITERABLE!!!!", 'there are other ways to iterate the objects, not using this way'



