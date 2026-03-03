// Dates

let myDate = new Date() // Date is an object in *javascript
console.log(myDate);

// let's try to convert this date into string

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof(myDate));

// let myCreatedDate = new Date(2025, 4, 26) // 4 because of month started from 0 jan, 1 feb, etc like that
// let myCreatedDate = new Date("2025-04-26") // if i want in yyyy-mm-dd format
let myCreatedDate = new Date("04-26-2025") // if i want in mm-dd-yyyy format
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now()/1000); // to get in seconds but it will give in decimal that we don't want so w'll use -
console.log(Math.floor(Date.now()/1000)) // floor is also okay to use
console.log(Math.round(Date.now()/1000)) // and round is also okay to use


let newDate = new Date()
console.log(newDate.getDate()); //27
console.log(newDate.getMonth()); //4
console.log(newDate.getHours()); // 12
console.log(newDate.getDay()); // 2 (tuesday)

// there are many more like getMinutes and all, can get on mdn docs

newDate.toLocaleString('default',{
    weekday: "long"
})