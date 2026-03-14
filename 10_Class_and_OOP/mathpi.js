// getOwnPropertyDescriptor = Kisi bhi property ke andar jhank ke dekho — uski value, writability, enumerability, aur configurability sab pata chalta hai! Aur defineProperty se in settings ko apne hisaab se control kar sakte ho!

// syntax - Object.getOwnPropertyDescriptor(object, "propertyName")
//                                            ↑            ↑
//                                          object       property
//                                          ka naam      ka naam
//                                                       (string mein)

// Returns — Yeh 4 cheezein deta hai
//           {
//              value:        ,  // property ki value
//              writable:     ,  // true / false
//              enumerable:   ,  // true / false
//              configurable: ,  // true / false
//           }

const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descriptor);
// output - {
//              value: 3.141592653589793,
//              writable: false,
//              enumerable: false,
//              configurable: false
//          }

const bmw = {
    modelName: "BMWm340i",
    price: 20000000,
    isInStock: true
}
console.log(bmw);

//before
console.log(Object.getOwnPropertyDescriptor(bmw, 'modelName'));

// when we write our own code, js allows us to change it's property rules like we can ke it not writable like that from that 4 properties of getOwnPropertyDescriptor(), but we get on limited places not everywhere we can change it using 'Object.defineProperty()', here's how - 
Object.defineProperty(bmw, "modelName", {
    writable: false,
    enumerable: false,
    configurable: false
})
// after
console.log(Object.getOwnPropertyDescriptor(bmw, 'modelName'));