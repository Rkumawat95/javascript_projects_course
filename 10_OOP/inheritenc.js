class User {
     constructor(username){
          this.username = username
     }

     logMe(){
          console.log(`Username is ${this.username}`)
     }
}

class Teacher extends User {
     constructor(uname, email,password){
          super(uname)
          this.email = email,
          this.password = password
     }

     addCourse(){
          console.log(`new course is added by ${this.username}`)
     }
}

const tea = new Teacher("tea", "tea@gmail", "123")
tea.addCourse()