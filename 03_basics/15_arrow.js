const user = {
     username : "hitesh",
     price: 999,

     welcomeMessage: function() {
          console.log(`${this.username} welcome to website `);
     }
}
/*
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
*/

/*
function chai(){
     let username = "jay"
     console.log(this.username)
}
chai()*/

const chai = () => {
     let username = "jay"
     console.log(this.username)
}

//chai()

const addTwo = (num1, num2) => {
     return num1 + num2
}

//console.log(addTwo(7,3))


