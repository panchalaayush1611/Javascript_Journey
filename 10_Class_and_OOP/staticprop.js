class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`username is ${this.username}`);
  }

  //   static = Class ka apna method ya property — object banane ki zaroorat nahi, seedha class se use karo!

  static createId() {
    return `123`;
  }

  // createId() {
  //     return `123`;
  //   }
}

const aayush = new User("aayush");
console.log(aayush.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const bmw = new Teacher("bmwm340i", "bmwgermany@gmail.com");
console.log(bmw.createId);
