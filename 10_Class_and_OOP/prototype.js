// let myName = "Aayush      "
// console.log(myName.trim().length);

let myHeros = ["ViratKohli", "RohitSharma"]

let heroPower = {
    ViratKohli: "chase master",
    RohitSharma: "pull shot",
    getViratPower: function(){
        console.log(`Virat power is ${this.ViratKohli}`);
    }
}

// inheritance
// Ek class doosri class ki properties aur methods le leti hai — dobara likhne ki zaroorat nahi!
// Beta baap ki saari cheezein use kar sakta hai — plus apni khud ki bhi! 

// what is __proto__ in js?
// __proto__ = Ek hidden link jo har object mein hota hai — jo usse apne "parent" se jodata hai!

// __proto__ = Har object ka ek hidden link — jo use apne parent se jodta hai — taaki parent ki properties bina copy kiye use ho sakein! Inheritance andar se yehi use karta hai!

const user = {
    name: "Aayush",
    email: "aayush15@gmail.com"
}

const Teacher= {
    makeVideo: true
}

const TeachingSupport ={
    isAvailable: true
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    // linking TeacherSupport here using __proto__
    __proto__: TeachingSupport
}

// we can do that link outside also like these - 

Teacher.__proto__ = user

// but these approaches for using __proto__ are out-dated nowadays, but can be seen..!

// modern approach...
// moderm syntax

// Object.setPrototypeOf(child, parent);
//                          ↑       ↑
//                       jiska    jisko parent
//                       proto    banana hai
//                       set karo

// access Object directly -> we have specail method named setPrototypeOf bts is __proto__ but the syntax is new one..!
Object.setPrototypeOf(TeachingSupport, Teacher)

let uname = "Aayush Panchal     "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}
uname.trueLength()