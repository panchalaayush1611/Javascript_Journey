// how to do singleton or how to declare using constructor and all...

// two ways to declare objects

// const ytUser = new Object()
// console.log(ytUser); // will print empty object

// another way to declare object is - 
const ytUser = {} // {} this sign referes to object
// declare ID
ytUser.id = "18vk"
ytUser.name = "sammy"
ytUser.isLoggedIn = false

// console.log(ytUser);

// both ways are correct

const regularUser = {
    email: "panchalvk18@gmail.com",
    fullname: {
        userfullname: {
            firstname: "aayush",
            middlename: "m",
            lastname: "panchal"
        }
    } // declaring objects inside object basically nested object type of thing
}

// to access this value simply we use . notation

// console.log("name is",regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.userfullname);

// as we have done merging arrays so we have to do objects also here the way - 
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign({}, obj1, obj2) // Object.assign(target, source) we use {} because its good to use basically we have targeted {} as empty object so that will go into {} not in obj1 - but we are not using this very often 

// we gonna use spread operator - 
const obj3 = {...obj1, ...obj2}

// Object.assign() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// console.log(obj3);

// we gonna use this when the value is coming directly from the database and it will be coming from database obvious
// so whenever user come from the database they come in type of array of objects []

const user = [
    {  
        id: 1,
        email: "ap@gmail.com"
    }, // this would be 1 object in that there are values and there are multiple type of objects in that
    {  
        id: 2,
        email: "new@gmail.com"
    },
    {  
        id: 3,
        email: "mail@gmail.com"
    } 
    // like this
]

// access
// console.log(user[0].id) 
console.log(user[0].email) // okay!
console.log(ytUser);
console.log(Object.keys(ytUser));
console.log(Object.values(ytUser));
console.log(Object.entries(ytUser)); // basically it make the key into array and gives inside array like that array inside array but individual key value pair like id and its value is inside one array that's oven then another array inside that there's another key value pair! this is rare used
console.log(ytUser.hasOwnProperty('isLoggedIn')) // true
console.log(ytUser.hasOwnProperty('isLogged')) // false





// destructuring of OBJECTS - 

const course = {
    courseName: "JS Part1",
    price: "799",
    courseTeacher: "Chai Aur Code"
}

// people generally use course.courseName to print the value but here's the another way to do that but people use this often and it's useful and it's called destructure

// syntax - const { here name of the key value of object } = objectNameHere - for destructuring

const {price, courseName} = course
console.log(price);
console.log(courseName);

// if i feel the name is too long, so i can make it small and then use it like this - 
const {courseTeacher: teacher} = course
console.log(teacher);

// we can destructure both arrays and objects but doing that to array is very rare

// API and all
// what is API? - API stands Application Programming Interface, in simple words API means when you want to handover some work on somebody and you don't want any stress of how what to do and all then you hand over to APIs.

// API call cames in JSON format like these
// what's json? it looks like object but only with this {}
// basically we have to write key and values in string format in JSON like below we mentioned that name is key and aayush is value but we wrote that into string format, yes in JSON we have write like this only


// {
//     "name": "aayush",
//     "age": 25,
//     "course": "JS-Part-1"
// } // this is how API comes

// that's not confirm that you can always get API in objects format, can get in ARRAY format als, ya both ARRAY OR OBJECT format

// inside array api format there are different different objects braces like this 

[
    {},
    {},
    {}
]

// THERE'S FAMOUS API CALLED RANDOMUSERME API LET'S SEE THAT

// but but we can't understand so first we have to use formatter to understand, here's the one called JSON FORMATER basically here we put that API code and can see in full intended way, basically we can format in understandable way, here's the link - https://jsonformatter.org/

// most off APIS are JSON format (probably)

// JSON - Javascript Object Notation

// with the help of json formatter you can format that json code and look in tree, text, form, view and it shows that this is object, this is array and all



