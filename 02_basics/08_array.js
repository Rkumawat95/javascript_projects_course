const myArr = [0,1,2,3,4,5, true, "hitesh"]
const myheros = ["shaktiman", "naagraaj"]

const myArr2 = new Array(1,2,3,4)
//console.log(myArr2[0])

//myArr.push(6);
//myArr.push(7)
//myArr.pop()
//myArr.unshift(0)
//myArr.shift()
//console.log(myArr)
//console.log(myArr.includes(4))
//console.log(myArr.indexOf(9))

//const newArr = myArr.join();
//console.log(myArr)
//console.log(newArr)

// slice, splice

console.log("A ", myArr)
const myn1 = myArr.slice(1, 3)
console.log(myn1)

const myn2 = myArr.splice(1, 3)
console.log(myn2)
console.log(myArr)


