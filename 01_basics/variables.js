const accountId = 180745
// accountId = 274601 // not allowed in for const

let accountState;

let accountEmail = "ap1009@yahoo.com"
accountEmail = "abp@duckduck.com"   // this way is good to use but not correct way to use as a coder! so avoid to use it!!

var accountPassword = "74599"
accountPassword = "37646782"    // this way is good to use but not correct way to use as a coder! so avoid to use it!!

accountCity = "Assam"   // this way is good to use but not correct way to use as a coder! so avoid to use it!!

accountCity = "Bengaluru"   // this way is good to use but not correct way to use as a coder! so avoid to use it!! 

console.log(accountId);

// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);
/* 
    if you have to print multiple vars or anything using console use console.table([]).. for e.g 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) /* perfect way to use console.log if you have many things to display instead of writing console.log().... */

/* 
    Prefer not to use var
    because of issue in block scope and fucntional scope
*/





