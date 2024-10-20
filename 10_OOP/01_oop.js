// const user = {
//      username: "hitesh",
//      loginCount: 8,
//      SignedIn: true,

//      getUserDetails: function(){
//           console.log("Got user Detail ")
//           console.log(this)
//      }
// }

// //console.log(user.loginCount)
// console.log(user.getUserDetails())


function User(username, loginCount, isLoggedIn){
     this.username = username,
     this.loginCount = loginCount,
     this.isLoggedIn = isLoggedIn

    // return this
}

const  userone = new User("hitesh", 12, true)
const usertwo = new User("rk", 12, false)
console.log(userone)
