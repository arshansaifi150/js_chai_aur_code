// Data types on the basis of how to store and call data from memory which means call by value or call by reference

//  Primitive //call by value dataTypes

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null //typeof as object
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);//output false cuz they are different

// const bigNumber = 3456543576654356754n //n is use to make bigint



// Reference (Non primitive)

// Array, Objects, Functions //all of them have typeof as Object

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3




//****************** MEMORY STACK AND HEAP **************************/

//Stack(For primitive type),Heap memory(for Non-primitive Type)

let myName = "ARSHANSAIFI" //store in stack

let anothername = myName; 
console.log(anothername);//ouput as ARSHANSAIFI
anothername = "ANAS";
console.log(myName); //output as ARSHANSAIFI
console.log(anothername); //output as ANAS

/* Reason => a copy of myName is saved in anothername thats why when we reassigned anothername to "ANAS 
The value of anothername changed but not of myName
*/

//non primitive dataType are stored in heap memory by reference
let userOne ={
    email:"admin@123",
    upi:"pnb3"
}

let userTwo = userOne;
userTwo.email = "info@gmail.com"  //the original value of userOne.email is also changed cuz they follow by reference

console.log(userOne.email);//output info@gmail.com
console.log(userTwo.email);//output info@gmail.com