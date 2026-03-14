// another way to use get(), set() using object

const User = {
    _email: "ap@18ai",
    _password: "123bmw",
    
    get email(){
        return this._email.toUpperCase()   
    },

    set email(value){
        this._email = value
    }
}

const bike = Object.create(User)
console.log(bike.email);