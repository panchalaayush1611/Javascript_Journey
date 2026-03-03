// map() filter() and reduce() array functions

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



// filter ~ also takes the callback, filter gives the value return back, while for_each don't, basically filter means the value which is true that will be o/p

const newNums = myNums.filter( (num) =>  num > 4)

// const newNums = myNums.filter( (num) =>  {         // if we want to use inside {} scope, so you have to use 'return'
//     return num > 4
// })

// console.log(newNums);

// chaining - means using map after the map
const newNumss = myNums.map( (num) => num * 10 ).map( (num) => num + 2).filter( (num) => num >= 40)
// this is called 'CHAINING'
console.log(newNumss);




