//const coding = ["js", "cpp", "java", "python", "ruby"]

const myNums = [1, 2, 3,4,5,6,7,8,9,10]

let newnums = myNums.filter( (num) => num > 4 )
//console.log(newnums);

//const newValue = myNums.map((num)=> num + 10)
/*
const newValue = myNums
                              .map((num)=> num*10 )
                              .map((num)=> num + 1)
                              .filter((num)=> num >= 40)

console.log(newValue);
*/
// reduce method

const mynum1 = [1,2,3]

const mytotal = mynum1.reduce( (acc, currval) => {
     console.log(`acc : ${acc} and currval: ${currval}`);
     return acc + currval
}, 0 )

console.log(mytotal);


