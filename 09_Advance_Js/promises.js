// what are Promises? - The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// PROMISE IS EVENTUAL COMPLETION OBJECT, at the end it's as OBJECT

/* 
Promise kya hota hai?
    Socho tumne Swiggy pe order kiya. Swiggy ne bola — "haan bhai, khaana aayega!" — yahi hai ek Promise.
    3 states seedhi bhasha mein:

Pending → Khaana ban raha hai, abhi wait karo 🍳
Fulfilled → Delivery boy aa gaya, khaana mil gaya! ✅
Rejected → Restaurant ne cancel kar diya 😤

.then() → Jab khaana aa jaaye tab kya karna hai
.catch() → Agar kuch gadbad ho toh kya karna hai
async/await → Ek aur tarika — seedha likhte hain jaise normal code, andar se Promise hi hota hai 
basically - Promise = "Main baad mein result dunga — ya toh kaam hoga, ya fail hoga."
JavaScript isko use karta hai taaki page block na ho jab koi slow kaam (like API call) chal raha ho.
*/

// 1944576525 app(n) number, LL

// we have to make various types of PROMISES now.

/* this is how we make promise - 

    const promiseOne = new Promise( function(resolve, reject){
        // resolve → call karo jab kaam SUCCESS ho
        // reject  → call karo jab kaam FAIL ho
    } ) 
    function contains two part, resolve and reject

*/

// because if know the creation of promise then will automatically get to know about consumption of promise

// REMEMBER THAT RESOLVE IS DIRECTLY CONNECTED IN .then()

// 1st promise
const promiseOne = new Promise(function (resolve, reject) {
  // do an async task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is completed!");
    resolve();
  }, 1000);
});

// we haven't connected .then() with resolve
// resolve is a method, we have to call it first
// now we will call resolve(), inside the setTimeout
promiseOne.then(function () {
  console.log("Promise consumed!");
});

// 2nd promise
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task two!");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async task two resolved!");
});

// now we can pass the parameter in resolve(), which will get the data using .then()

// 3rd promise
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Aayush", role: "Web developer" }); // we can pass object {} and array too [] inside resolve's parameter
  }, 1000);
});

promiseThree.then(function (userDataFrompromiseThree) {
  console.log(userDataFrompromiseThree);
});

// 4th promise
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "ap18", password: "18450733" });
    } else {
      reject("Error 404, something went wrong ");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    // this is called chaining, the new value will come from the returing from above .then()'s return value
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  // .finally() = "Chahe kuch bhi ho — success ho ya fail — yeh code ZAROOR chalega"
  .finally(() => console.log("The promise is either resolved or rejected"));

// 5th promise

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "js", password: "123" });
    } else {
      reject("Error : JS went wrong");
    }
  }, 1000);
});

// now i want to handle this promiseFive using different methodology, we can do it using 'async and await' syntax :-

/*
-> aync() - "Yeh function thoda time lega",
-> Bas itna — async lagao function ke aage, aur woh function ab bol raha hai - "Bhai main Promise return karunga!"

-> await() - "Ruk ja, pehle yeh ho jaane de"
-> await ek STOP sign hai — "Aage mat ja jab tak yeh kaam finish na ho"
*/

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// async and await's problem is that, it can't handle errors directly

async function getAllUserData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // now the data will be coming into string format, we have to convert into json format
    const dataIntoJson = await response.json(); // this will also take it's time to convert, so we have to put await here too!
    console.log(dataIntoJson);
  } catch (error) {
    console.log("E: ", error);
  }
}
getAllUserData();

// HOW TO USE FETCH API

/*
  fetch("http://example.com/api/endpoint")
  .then((response) => {
    // Do something with response
  })
  .catch((err) => {
    // Handle error here
    console.log("Unable to fetch -", err);
  });
*/

// ANOTHER WAY using FETCH()

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  // we have to do 'chaining' now, also called 'thenable'
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
