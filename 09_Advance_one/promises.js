/*
const promiseOne = new Promise(function(resolve, reject){
     // Do an async task
     // DB calls, cryptography, network

     setTimeout(()=>{
          console.log('Async task is completed');
          resolve()
     }, 1000)
})

promiseOne.then(()=>{
     console.log("Promise consumed");
})*/
/*
new Promise(function(resolve, reject){
     setTimeout(function(){
          console.log("Async task 2");
          resolve()
     })
}, 1000).then(()=>{
     console.log("Assync 2 resolved ");
     
})
*/
/*
const promiseThree = new Promise(function(resolve, reject) {
     setTimeout(function(){
          resolve({username: 'chai', email: "chai@gmail.com"})
     }, 1000)
})

promiseThree.then(function(user){
     console.log(user);   
})
*/
/*
const promiseFour = new Promise((resolve,reject)=>{
     setTimeout(()=>{
          let error = true
          if(!error){
               resolve({username: 'hitesh', password: '123'})
          }else{
               reject('Error: Something went  wrong')
          }
     }, 2000)
})

promiseFour.then((user)=>{
     console.log(user);
     return user.username;
})
.then((myuser)=>{
     console.log(myuser);
})
.catch((err)=>{
     console.log(err);  
})
.finally(()=>{
     console.log("The promise is either resolved or rejected");
})

const promiseFive = new Promise((resolve, reject)=>{
     setTimeout(()=>{
          let error = true
          if(!error){
               resolve({username: 'Javascript', password: '123'})
          }else{
               reject('Error: JS went  wrong')
          }
     }, 2000)
})

async function consumepromisefive(){
     try {
          const responce = await promiseFive
          console.log(responce);
     } catch (error) {
          console.log(error);
          
     }
}

consumepromisefive()

*/

// async function getAllUser() {
//      try {
//           const responce = await fetch('https://jsonplaceholder.typicode.com/users')
//           const data = await responce.json()
//           console.log(data)
//      } catch (error) {
//           console.log(error)
//      }
// }

// getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((responce)=>{
     return responce.json()
})
.then((data)=>{
     console.log(data);
})
.catch((error)=>{
     console.log(error)
})