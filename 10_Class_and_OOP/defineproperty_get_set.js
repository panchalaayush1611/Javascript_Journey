// other way to use get(), set() using function [older way]

function User(email, password){
    this._email = email;
    this._password = password;
    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value 
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value 
        }
    })
}

const aayush = new User("ap18@ai", "bmw18")
console.log(aayush.email);
console.log(aayush.password);