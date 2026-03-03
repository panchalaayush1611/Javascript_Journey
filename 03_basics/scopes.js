if (true) {
    let a=10
    const b=20
    var c=30 // if we remove var here and write only c=30, still it will print, here the scopes enters
}

// console.log(a)
// console.log(b)
// console.log(c)

// what this code means? we made if statement and given true to condition that means if goona enter into that then we declare 3 variable using 3 different declarations like let, const, and var but we have declared in if statement that means it's valid till if, not after that {}, but if i am printing outside if that log a, b, c. first error would be "a is not defined", because it's valid that var a exist in if so we can access that after the end of if statement, it's valid inside if right..

// after second error comes same for b, same reason, then we comment out that log of a and b,

// here the main twist enters that if i print c variable which is declared inside the if, but it's printing...30 right.. as per rules it shouldn't print right, because of var, but if we remove var still it will print that 30 (THAT'S WHY MOSTLY DEVELOPERS DON'T USE "VAR", they use LET and CONST)

// BLOCK and GLOBAL scope - 
// block scope is that particular block of code right, like we have written IF statement that's BLOCK SCOPE and outside that, everything is GLOBAL SCOPE

// SIMPLE RULE - you write something inside the block scope like any thing if, func and all that should not go outside that block and it's valid till that

let x = 18
// console.log("OUTER:",x);

if (true) {
    let x = 20
    // console.log("INNER:",x);
}

// logic behing above code - 

// here the main scoping comes, this is simple and logical to use it anywhere
// we have declared X = 18 and prints X, after that we have made a small IF block and then we have declared the same name variable X but the value is different and then prints that X inside that if block, while OUTPUT both executed, why it don't make raita between that, because of scope and block variable, if block's x is totally seperated from that outer X right, that's why, do code like this - logically


// SIMPLE RULE - REMEMBER that if we write something in global scope, remember we can access and use that inside any local scope block but but the things we have written in local or block scope that not gonna use outside that (means in global scope area)
// LOCAL SCOPE == LOCAL SCOPE == BLOCK SCOPE 
// BLOCK SCOPE == BLOCK SCOPE onlyyyy


// NESTED SCOPE - 

// RULE of scope is that, adult can't take ice cream from child, but child can take ice cream from parent. so here one() is parent and two() is child so if we call and all in two() func for one() it will give but in one(), if we call something related to two() it will throw an error respectively, two() can take because for that one() is global scope as per code

function one(){
    const username = "aayush"
    function two(){
        const website = "x.com"
        // console.log(username);
        // console.log(website);
    }
    // console.log(website); // will throw error because one() can't take anything from two(), if we comment this and see what comes
    two()
}
one()

// same we can do with if statement

if (true) {
    const username = "aayush"
    if (username === "aayush") {
        const website = " linkedin"
        // console.log(username + website); // this will print because we can take anything from the parent in child     
    }
    // console.log(website); // because can't take from child, because we have delcared in parent that's why
    
}
// console.log(username); // error because username's scope is not here! we have learned that if's scope would be used inside that only, here we have declared outside that's why


// ++++++++++++++++++++++++ INTERESTING ++++++++++++++++++++++++

console.log(addone(5)) // we can access before declaration, we can access in both way before and after here, mostly after one is used highly and effectively
function addone(num){
    return num + 1
}


// we can do this above thing same in another way and it's commonly used - 

const addtwo = function(num){    /* here addtwo is called expression, this whole is function but also called expression, we do like variables */    
    return num + 2
}
console.log(addtwo(5)) // we can't access before declaration


// but problems comes when you decalre functions in other ways like above one! right, explanation - 
// in addone() function if we took that console.log(addone(5)) above the function basically before the initialization of the function it will console that respected value, means it will to function, give answer 6 yehhhh, but but but...

// while in the second function that const addtwo one, in that if we took that console.log(addtwo(5)) line above the function initialization, it will not give any value like first one gave but yeh it's throw and error that "ReferenceError: Cannot access 'addtwo' before initialization", basically it will not give value, if we want value we have to execute that after initialization but in that simple function we can move it before that function