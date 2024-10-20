//ES6

class User {
     constructor(uname, email, password){
          this.uname = uname,
          this.email = email,
          this.password = password
     }

     encryptPassword(){
          return `${this.password}abc`
     }

     changeUsername(){
          return `${this.uname.toUpperCase()}`
     }
}

const chai = new User("chai", "chai@gmail.com", "123")
console.log(chai.encryptPassword())
console.log(chai.changeUsername())