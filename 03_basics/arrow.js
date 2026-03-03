// what is "this" keyword? - THIS keyword is used to access the current context, like this.username and all. THIS REFERS CURRENT CONTEXT onlyyy

const { useImperativeHandle } = require("react")

const user = {
    username: "aayush",
    price: 799,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`)
        // console.log(this); // this will print the current values, current contexts
        
    }
}

user.welcomeMessage() // this will be the default value, right, what if someone changes the value of username after this? - 
user.username = "King Kohli"
user.welcomeMessage() // then it will print the newer one not older one which is aayush 
// because we are using current context right, this keyword 

// NOTE - IF WE PRINT "THIS" ONLY IN NODE IT WILL GIVE OUTPUT AS "{}" BECAUSE IT'S EMPTY IN OBJECT, BUT IF SOMEONE IS USING JS ON BROWSER AND WE DO THE SAME THEN IT WILL PRINT SOMETHING LIKE WINDOW AND ALL

// in browers the global object is WINDOWN OBJECT, that's why it shows that, that we'll look in DOM concepts

console.log(this); // this will print {} because it's empty, it don't have any current values or context to refer, that's why


// if we are making a function and use this keyword in that function it will not print, it gives undefined

function chai(){
    let username = "scout"
    console.log(this.username); // this will print undefined because we are using in function, it will print but we have to declare and call using other methods   
}
chai()

const coffee = function(){
    let username = "scout"
    console.log(this.username); // using this function declaration style also gives undefined as answer
}
coffee()

// then after we have to use arrow function for this, but still it will not print, same answer as above ones are giving 

const matcha = () => {
    let username = "scout"
    console.log(this.username); // using this function declaration style also gives undefined as answer
}
matcha()

// ARROW FUNCTION DEFINATION - 

// this is basic arrow function - 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// but we can use arrow function with another style called IMPLICIT RETURN (means i have accepted, you don't need to right, i have accepted)
// const addTwo = (num1, num2) => num1 + num2 // this is how we write implicit return arrow function, we don't need to write return and if WE HAVE USED {} THEN WE HAVE TO WRITE RETURN COMPULSORY and another way to use implicit return arrow is this - 

// const addTwo = (num1, num2) => num1 + num2 

// both are correct way!

// const addTwo = (num1, num2) => (num1 + num2)

// console.log(addTwo(5,8))

// and explicit return arrow means, we have to write return externally 

// and we have to do this same way in object so - 

const addTwo = (num1, num2) => ({username: "op"}) // we have to wrap in {}

console.log(addTwo(5,8))


const myArray = [1,2,2,3,4]
