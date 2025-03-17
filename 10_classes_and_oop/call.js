function Setusername(username) {
    this.username = username
    console.log("called")
}
function creatUser(username,email,password){
    Setusername.call(this,username)

    this.email = email
    this.password = password
}

const chai = new creatUser("Chain","chai@fb.com","123")
console.log(chai)