class User {
     constructor(uname){
          this.uname = uname
     }

     logMe(){
          console.log(`Username : ${this.uname}`);
     }

     static createId(){
          console.log("123");
          
     }
}

// const rahul = new User("Rahul")
// console.log(rahul.createId());


class employee extends User {
     constructor(uname,email) {
          super(uname)
          this.email = email
     }
}

const iphone = new employee("iphone", "i@phone.com")
iphone.logMe();
//iphone.createId()
