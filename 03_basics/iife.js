// Immediately Invoked Function Expressions (IFFEs)

// IFFE means, An IIFE (Immediately Invoked Function Expression) is an idiom in which a JavaScript function runs as soon as it is defined. It is also known as a self-executing anonymous function, and It helps avoid polluting the global scope by keeping variables inside the function private.


// this is normal way to write function and ya it's immediately invoked but we have called that in global scope so somehow it's not, so not to do that we write IIFE function
function caffiene(){
    console.log(`Developers drink caffiene for staying on their desk`);
}
caffiene();

// This is an IIFE (Immediately Invoked Function Expression). It defines a function named bgmi and runs it immediately. The purpose is to execute code without leaving variables/functions in the global scope. It logs a message to the console when run. (below one)

// syntax and writing pattern - 
(function bgmi(){
    console.log(`Biggest Gaming Org in India is S8UL Esports`);
})();

// when we are using functions and all and specially here, iffe function and we make another same after that if will give error, becuase it should know that where to start so use ";" in before function's ending...

(function codm(){
    // this is NAMED IIFE because it has it's name!
    console.log(`CODM is becoming famous in India`);
})();

// if we remove that function and all and just make it IIFE, it will also run in this type

(() => {
    // this is SIMPLE IIFE because it don't have it's name
    console.log(`APEX is okayish game for Indians`);
})();

// and then we have to pass something value and all, you can also do that, we used " `` " so that takes variable for print, let's see and take it as function that how it takes and calls the value...

((gameName) => {
    console.log(`APEX is okayish game for Indians, but ${gameName} is more popular`);
})('BGMI')

// when someone asks that what is IIFE, then not just say that any "function who executes immediately", this is write but in interview or like any professional way this is not complete and satisfied answer, tell this - when having pollution of global scope that time we use IIFE to stay aways from pollutating from the global scopes