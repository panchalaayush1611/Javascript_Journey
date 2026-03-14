function setUserName(username){ 
    // complex calulations, DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // setUserName(username)
    // username is not called, it looked like it called but internally in js it didn't, only reference is taken not the call

    // so we have to use .call() BUT BUT we are just holding the reference
    // setUserName.call(username)
    
    // we have to give our own this, BASICALLY THIS TELL THAT I WILL NOT USE MINE THIS, I WILL USE YOURS
    setUserName.call(this, username)


    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chaipass@gmail.com", "1845")
console.log(chai);