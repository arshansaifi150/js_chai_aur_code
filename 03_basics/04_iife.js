// Immediately Invoked Function Expressions (IIFE)
//use to resolve global scope polution
// also use to execute somehing immediately

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); //() this is execution parenthasis have to use ; to end the excution 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')