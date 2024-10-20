//const tinderuser = new Object()
const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "sammy"
tinderuser.isLoggedIn = false

//console.log(tinderuser)

const regularUser = {
     email: "some@gmail.com",
     fullname: {
          userfullName: {
               firstname : "Rahul",
               lastname : "kumawat"
          }
     }
}

//console.log(regularUser.fullname.userfullName)

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

//const obj3 = { obj1, obj2 }
const obj3 = Object.assign({},obj1, obj2)
//console.log(obj3)


console.log(regularUser.hasOwnProperty("email"))