const user = {
    username: "Parth",
    loginCount: 8,
    signedIn: true,

    getUSerDetails: function(){
        //console.log("Got details")
        // console.log(`username: ${this.username}`)
        console.log(this)
    }

}
const user2 = {
    username: "Parth",
    loginCount: 8,
    signedIn: true,

    getUSerDetails: function(){
        //console.log("Got details")
        // console.log(`username: ${this.username}`)
        console.log(this)
    }

}
// console.log(user.username);
// console.log(user.getUSerDetails());
// console.log(this)

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loggnCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`)
    }
   // return this

}
const userOne =  new User("Parth",12,true)
const userTwo= new User("User",11,false)
console.log(userOne.constructor);
// console.log(userTwo);