// ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const aayush = new User("aayush18", "ap@gmail.com", "123");
console.log(aayush.encryptPassword());
console.log(aayush.changeUsername());

// behind the scenes

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}

const panchal = new User("panchal18", "panchal@gmail.com", "123");
console.log(panchal.encryptPassword());
console.log(panchal.changeUsername());