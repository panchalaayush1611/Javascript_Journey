// what is getter and setter? - Getter = Property ko padhne ka controlled tarika, Setter = Property ko set karne ka controlled tarika

// JavaScript me getter aur setter objects ke special methods hote hai jo properties ko read (get) aur update (set) karne ke liye use hote hai. Ye normal functions jaise dikhte nahi, but internally run ho jate hai jab hum property access ya change karte hai.

// Simple words me:
// Getter    →    value lene ke liye
// Setter    →    value set/change karne ke liye

// using class - 

class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    // whenever we make getter and setter, the name would be same
    // we do return in getters
    // we don't return in setters
    // when we use get we have to use set also

    // it gets the value
    get email(){
        return this._email.toUpperCase()
    }

    // it sets the value
    set email(value){
        this._email = value
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value.toUpperCase()
    }

}

const aayush = new User("ap15@ai", "123abc")
console.log(aayush.password);
console.log(aayush.email);