function sayMyName(){
     console.log("H");
}

//sayMyName();

function addToNumber(number1,number2){
     return  number1 + number2
}

const result = addToNumber(34, 23);
//console.log("Result ",  result)

function loginUserMessage(username){
     return `${username} just logged in.`
}

//console.log(loginUserMessage("hiitesh"))

function calculateCartPrice(...num1){
     return num1
}

//console.log(calculateCartPrice(200, 300, 500, 800))

const user = {
     username : "hitesh",
     price: 1000
}

function handleObject(anyObject){
     console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

//handleObject(user)

const newArray = [200,400,500,1000]

function returnSecondValue(getArray){
     return getArray[1]
}

console.log(returnSecondValue(newArray))