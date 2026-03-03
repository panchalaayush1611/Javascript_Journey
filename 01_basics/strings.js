const name = "aayush"
const linkedInFollower = 18

// now to concate this strings, there are two ways
// first is...

// console.log(name + " " + linkedInFollower) //this is veryyy overrated way

// second is using the backtick (` `) signs and called as "String Interpolation"

console.log(`Hello my name is ${name} and my linkedIn followers are ${linkedInFollower}, this is what it is!`); //this is the modern way and best

// now another way to declare the string is - 

const gameName = new String('Surfurs')

// basically this can be written in key and value pair for e.g 0 is key and value is S, 1 is key and value is u and so on
console.log(typeof gameName);

// now let's get the values from the keys, look,
console.log(gameName[0])
console.log(gameName[1])
console.log(gameName[2])
console.log(gameName[3])
console.log(gameName[4])
console.log(gameName[5])
console.log(gameName[6])
console.log(gameName[7])

// got it

// and to access Prototype
console.log(gameName.__proto__) // currently this is empty object

console.log(gameName.length); //will give length
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2)) //let check that on 2nd place which char is there
console.log(gameName.indexOf('r')) //let check that on r is on which index place 

const subStr = "xspark"
// const trySub = subStr.substring(0, 4) // it will consider till 3 like here we have written 4 so will consider till 3
const trySub = subStr.substring(0, 3)
console.log(trySub);

const newSlice = subStr.slice(-5, 5) // here we can take negative values also!
console.log(newSlice);

const trimTry = "   aayush panchal   "
console.log(trimTry); // there are trimstart and trimend also but mainly trimtry is used because it can do both trim feature
console.log(trimTry.trim());

// make sure to read mdn documentation for this! (for whole JS also because reading documentation is best for the new developers)

// let's try replace() string function

const rePlace = "https://aayush.com/panchal%18ogplayer"
console.log(rePlace.replace('%18', '-'))

// we can ask it also, like 

console.log(rePlace.includes("aayush.com")) // true
console.log(rePlace.includes("@")) // false

console.log(rePlace.split('com'))