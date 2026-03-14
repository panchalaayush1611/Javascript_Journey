// whenever we use 'this' keyword, we are talking about the 'current context'
const userData = {
    userName : "Aayush",
    loginCount : 18,
    signedIn : true,
    getUserDetail: function() {
        console.log("Got details from the database");
        // when i want to print the username in backticks basically with full line
        // console.log(`Username: ${username}`); // this will give that username is not defined, because we are in a scope

        // then we have to use 'this'
        console.log(`Username: ${this.userName}`);

        // if we just do log for this, it will console.log the current context of that time, but it do that because it's in FUNTION CONTEXT
        console.log(this);
    }}
    
console.log("Aayush Panchal");

// console.log(userData.userName);
// console.log(userData.getUserDetail());

// what if i print this in global context, it will give {} empty parentheseis, tells that nothing is there BUT this value gets changed everytime, not a constant
// because we are in 'NODE environment'
// but the same thing i do in brower's console, it will give many methods and all which is kept there.
// console.log(this);


// but when we want to make the 100 or more objects, is this true way to make? No, that will take much time, so we use 'CONSTRUCTOR FUNCTION'
// what is Constructor function? - Constructor Function = Ek blueprint function — jisse baar baar same structure ke objects ban sakein

// we can make multiple instances using 1 object literal is know as constructor function

// 'new' keyword is basically a constructor function

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    return this
}

/* what happen when we create 'new' keyword - 
    // 1. creates empty object literal
    // 2. constructor function got called because of new keyword (bags all the argument and give it to us)
    // 3. this keyword puts all the arguments into it
    // 4. we got that inside the function :)
*/

// const userOne = User("Aayush", 18, true)
// const userTwo = User("Panchal", 1, true)
// console.log(userOne);
// this gets overwrite the data, so we have to use 'new' keyword, basically, it is printing userTwo data in userOne's console log, overwriting, so use new keyword!

const userOne = new User("Aayush", 18, true)
const userTwo = new User("Panchal", 1, true)

// this will give copy of the object, because we have used new keyword!
console.log(userOne);
console.log(userTwo);


console.log(userOne.constructor); // output :- [Function: User]


