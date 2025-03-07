//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof anotherId);



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=====

//stack (Primitive), heap memory(non-primitive)

let myChannelname = "parthcom"
let anothernaem = myChannelname;
anothernaem ="ronini";
//console.log(myChannelname);
//console.log(anothernaem);

let userOne = {
    email:"user@gmail.com",
    upi:"user@sbi"
}

let userTwo = userOne

userTwo.email = "roni@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);
