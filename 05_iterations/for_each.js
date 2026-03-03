// this is also most used one loop among those in and of loops
// The forEach() method of Array instances executes a provided function once for each array element.



const coding = ['js', 'cpp', 'python', 'go', 'swift']
coding.forEach( function(item){
    // console.log(item);  
} ) // this is callback so will not write the name of the function in the () and in () the name item is random as per ourselves, that mean here item name is used to call that js, cpp, and all things!

// we can give call back in function format or arrow function format too

coding.forEach( (item_of_array) => {
    // console.log(item_of_array);
} ) // no need to write the name of the function, bcoz this is 'callback'

// now we can write for the function also, for example - 
function printMe(item){
    // console.log(item);
}
coding.forEach(printMe) // here we have to give the reference only, no need to execute by writing ()

// now for_each doesn't only have the item, it has index, arr (whole array)
coding.forEach((item, index, arr)=>{
    // console.log(item, index, arr);
})

// now very common operations related to objects which are inside the array
const myCoding = [
    {
        languageName : 'javascript',
        fileName : 'js'
    },
    {
        languageName : 'java',
        fileName : 'java'
    },
    {
        languageName : 'python',
        fileName : 'py'
    }
]

myCoding.forEach((item)=>{
    console.log(`Language name : ${item.languageName}`);
    console.log(`File name : ${item.fileName}`);
    console.log('\n');
})