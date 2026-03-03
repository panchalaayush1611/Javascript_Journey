// singleton --> Object.create (called constructor method)
// and
// object literals --> we are doing this currently object literals

// how to make object?

// you can make object using "Object.create" bascially this method is called making object using Constructor Method and in that "Singleton" becomes

// NOTE :- HERE EVERYTHING IS OBJECT LITERALS not SINGLETON (that will be in objects2.js file)

// how to declare symbol datatype - 
const mySym = Symbol("key1")

const JsUser = {
    name: "Aayush", // in objects you have to define KEYS and VALUES here name is key and Aayush is value
    "fullName": "Aayush Panchal",
    mySymbol: "symbolValueHere", // gives answer but but type of this mySym is not Symbol type main thing is that! because it's type is still a string
    // so to use mySym as symbol write like this --> [mySym]
    [mySym]: "originalSymbolAsType",
    age: 24,
    email: "pa18aush@apple.com",
    loc: "building",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Webnesday"]
}


// two ways to access Objects - 
console.log(JsUser.name);
console.log(JsUser["fullName"]);
console.log(JsUser["name", "email", "age"]);
console.log(JsUser.mySymbol);
console.log(JsUser[mySym]);

// when you want to change the value of the particular key, this is how you can do...
JsUser.name = "AAYUSHHHHH"
JsUser.email = "newaayush18@gmail.com"
console.log(JsUser["name"]);
console.log(JsUser["email"]);

// if you want to lock your object like no one can change it so do this --> freeze method
// Object.freeze(JsUser)
JsUser.email = "newaayush18@meta.com"
console.log(JsUser["email"]);
console.log(JsUser); // see email is there but previous one that newaayush18@gmail.com one! not meta one
// when anyone change, it will not give an error anymore but ya it's value cannot be changed, that's it

JsUser.greetings = function(){
    console.log(`hello user, ${this.fullName}`) // we used string interpolation here using backticks, we used "this" because we have to take the particular key from the object so when we use this. it will give the name of the things like keys from that object
}

// console.log(JsUser.greetings); // answer would be undefined but it i write () with greetings let's see what's coming
console.log(JsUser.greetings());
// return JsUser.greetings()

// in array you cannot define KEYS so use Object according to the process