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