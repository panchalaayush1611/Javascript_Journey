/*
The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

THE MOST IMPORTANT AND USED TOPIC
*/


/*
// EXAMPLE - 

const array = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10
*/

const myNums = [1,2,3]
// written using Function
const myTotal = myNums.reduce(function(accumulator, currentValue){
    console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`);
    
    return accumulator+currentValue;
}, 0) // here the 0 is for the start, means we are telling accumulator that you have to start from 0, so value for accumulator here is 0 if we give 3, it will take 3

// written using Arrow Function
// const myTotal = myNums.reduce( (accumulator, currentValue) =>  accumulator+currentValue, 0)

console.log(`Sum of [${myNums}] is ${myTotal}`);


// what to do, we have to do sum of the prices which are there in the shoppingCart
const shoppingCart = [
    {
        itemName: "Laptop",
        price: 105499
    },
    {
        itemName: "Mouse",
        price: 1100
    },
    {
        itemName: "Monitor",
        price: 12000
    }
]

const totalCartPrice = shoppingCart.reduce( (acc, item) => acc+item.price, 0)
console.log(`Order Total: ${totalCartPrice}/-`);







