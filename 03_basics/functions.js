// what is function? - function is basically a package in which we wrote the code and we can use it anywhere anytime and use it's copies

// how to write function? - function syntaxFuncVariableName(){
//                                  //  content here
//                          }

// suppose i have to print this 5, 10 times so we can use function

function myName() {
  console.log("A")
  console.log("A")
  console.log("Y")
  console.log("U")
  console.log("S")
  console.log("H")
}
// basically the above example shows the defination of function 

// myName is reference and when we use () it becames function execution, so variable name is reference of the function and with that we use () for execution

// myName()    // this is how we print but this is tooooo basic actual use of function is pretty different means this is very easy and yaaa in programming there's no easy things in code! haha

// let's make add 2 number using function

function addTwoNum(number1, number2) /* THIS IS PARAMETER */ { // here we have to pass the value in () and in javascript we don't need to give the type
    console.log(number1 + number2); // printing done now time for fucntion call
}

// addTwoNum() // "()" VALUES INSIDE THIS ARE CALLED ARGUMENT // here o/p would be NaN because we haven't passed the argument "()" this is argument we have to pass means the values

// addTwoNum(18, 45) // here the problem comes when we use string or else with the number because here we decided that let's give 2 number but someone gives number and string then it cause problem, that we'll sort (logic)

// what is parameter and argument? - WHEN WE ARE DEFINING THE FUNCTION WE WRITE () AFTER THE REFERENCE NAME YA, THAT'S A "PARAMETER" AND WHEN WE EXECUTE THE FUNCTION AND IN THAT WE PASS THE VALUE THAT'S CALLED AN "ARGUMENT"

// main mistake begginers do while understanding function concept that we can also store the value inside the variable like - 

const result = addTwoNum(3, 6) // here it will print right answer but when we console using the variable it give something different

console.log("Result :",result); // giving undefined 

// firstly it was giving the value after variable but why? because it was doing console.log which we have written inside the fucntion, IT'S NOT GIVING THE RETURN value ya, it's just doing console which is not true here, we don't need to do console.log, there are other correct ways and they are - 

function addTwoNum(number1, number2) /* THIS IS PARAMETER */ { // here we have to pass the value in () and in javascript we don't need to give the type
    // console.log(number1 + number2); // printing done now time for fucntion call - not correct way to do, other way is - 

    let newResult = number1 + number2
    return newResult // return is a keyword used to return the value not printing the value 
    // console.log("King")
    // return number1 + number2 // another way to return also, space we saved and all other, BOTH ARE CORRECT METHOD TO RETURN
}

// there's something called SCOPEs in programming that we will learn after this but you noticed that we have made the newResult inside the fucntion and we gave values and all outside the function, then also it's working properly, it's because of scopes..

// other rule of function is that when we wrote something, suppose console.log("King") it will "never print" that statement and it will show that "Unreachable code detected" the reason is that when we write return after that written things will print done by the function because it never check things after return we have to write whatever we want to do just before the RETURN.

const newResult = addTwoNum(18, 33)
console.log("Result :", newResult); 

// SO KINDLY USE RETURN KEYWORD

// so we have given values like we have given above, let's see other ways to give values in function -

function loginUserMessage(username) /* we write username because we want that from user basically parameter */ {
    if (username === undefined) /* another way to check is "!" this is not, it converts true to false and false to true so we can write "!username" also it will work as same*/{
        console.log("Please Enter Username");
        return // return here because we don't want that it prints below statement
    }
    return `${username} just logged in`
}

// so this is how we take parameter and give arguments
// console.log(loginUserMessage("aayush"))
// console.log(loginUserMessage()) // for e.g when someone do this but don't give value if do "" only it will give o/p as just logged in but when someone just leave by doing this () then the output would be undefined just logged in, null will not come because it's not defined yet that's why!


// so when we are doing code for cart and all so we don't know that user will add how much item.. here i took num1 and given argument 4 so, it will only display 1 passed value which is 20, but there's a thing call REST spread and REST operator which is used to collect all items from the array or object, into one so to use that we have to put "..." before the name of the parameter, so if i put ... before num1 like this (...num1) it will collect all the argument values which are passed into that and give in an array...right let's see

function calculateItemCart(...num1) { //...num1 became REST operator right!
    return num1
}

// after using REST with num1 can give all the values in array format right, now i just have to add using loop in future that it shows all items in cart and total values right..

console.log(calculateItemCart(20, 30, 200, 2499)) 

// how to use and pass object in function..

const user = {
    username: "aayush",
    priceLaptop: 70000
}

function handlingObject(anyobject) {
    console.log(`Name is ${anyobject.username} and price of the laptop is ${anyobject.priceLaptop}`)
}

// handlingObject(user)

// you can direct pass the object also like this..

handlingObject({
    username: "kingKohli",
    priceLaptop: 1000000000
})

// can also pass this same using array also..

// logic - we took an array called valueArray and store 4 values and made a new func named returnArrayVals and give parameter called arrayvals because outside name could be any, maybe changing in future and all so we will access values with arrayvals that's why and in that we return arrayvals [3] because we want 3rd element fromt the arrayyyy.. and then outside function we console that first we declared returnArrayVals and then gave parameter of the main array that we made

const valueArray = [180, 450, 330, 999]

function returnArrayVals(arrayvals){
    return arrayvals[3]
}

console.log(returnArrayVals(valueArray));
console.log(returnArrayVals([180, 450, 330, 630])); // we can pass the value here also just like we have done while learning object
 