class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        // calling using super keyword
        // this will take username from extended User and goes insider construtor of User and give us to use username
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`new course was added by ${this.username}`);
    }

}

const aayush = new Teacher("aayush", "ap@gmail.com", "123")
aayush.addCourse()

const vk = new User("Virat Kohli")
vk.logMe()

// console.log(aayush === Teacher);

// we can check that it is a instance or not using 'instanceof'
console.log(aayush instanceof Teacher);
console.log(aayush instanceof User);