// while loop
let i = 0;
while (i <= 10) {
  console.log(`Value of Index is ${i}`);
  i = i + 3;
}
console.log("\n");

// using an Array
let myArray = ["virat", "rohit", "hardik"];
let arrVal = 0;
while (arrVal < myArray.length) {
  console.log(`Value is ${myArray[arrVal]}`);
  arrVal = arrVal + 1;
}


// do..while loop
// here first code executed then the condition will be checked
// it will execute once, no matter what condition will be
let score = 1
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);