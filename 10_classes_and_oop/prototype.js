// let myName = "Parth      "
// let myName2 = "chai      "

// console.log(myName.truelength);


let myHeros = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman: "sling",

    getSpiderPower:function(){
        // console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.parth = function(){
    // console.log("Parth present in all object")
}

// heroPower.parth()



Array.prototype.heyParth = function(){
    console.log(`Hi everyone`);
}

// myHeros.parth()
// myHeros.heyParth()
// heroPower.heyParth()


//inheritance

const User = {
    name:"chai"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable:false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime:true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User

//morden syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "Parthpatel    "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}
anotherUsername.trueLength()
"parth".trueLength()
"iceTea".trueLength() 