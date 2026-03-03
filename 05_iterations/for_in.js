// earlier we have seen that for_of loops doesn't work for Objects..
// so we have 'for_in' loop for using objects in loop 
// that doesn't mean for_in used for objects only, we can use this for other use too..!

const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'swift by Apple'
}

for (const key in myObject) {
    console.log(`'${key}' shortcut is for '${myObject[key]}'`);   
}

const programming = ['js', 'rb', 'py', 'cpp']
for (const key in programming) {
    console.log(programming[key])
}


// const map = new Map()
// map.set('IN', 'INDIA')
// map.set('FR', 'FRANCE')
// map.set('GER', 'GERMANY')
// map.set('IN', 'INDIA')
// for (const key in map) {
//     console.log(key);
// }
// for_in loop will not work for map