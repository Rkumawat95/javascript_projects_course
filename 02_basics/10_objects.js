// singleton

//object literals

const JsUser = {
     name: "Rahul",
     "full name":"Rahul Kumawat",
     age: 25,
     location: "jaipur",
     email: "rk@gmail.com",
     isLoggedIn : false,
}

//console.log(JsUser.email)
//console.log(JsUser["name"])

// use of squre notation
//console.log(JsUser["full name"])


JsUser.email = "Rahul@gmail.com"
//Object.freeze(JsUser)
//console.log(JsUser)


JsUser.greeting = function(){
     console.log("Hello Js User")
}

JsUser.greeting2 = function(){
     console.log(`Hello Js User ${this.name}`)
}

console.log(JsUser.greeting2())