//for
/*
for (let i = 0; i < 10; i++) {
     const element = i;
     if(i==5){
          console.log(" 5 is a best number");
     }
     console.log(element);
}*/

/*
for (let i = 1; i <= 10; i++) {
     console.log(`Outer  loop value: ${i}`);
     for (let j = 1; j <=10; j++) {
          console.log(i + "*" + j + "=" + i * j);
     }
}*/
/*
let myArray = ["flash", "batman", "superman"]

for (let index = 0; index < myArray.length; index++) {
     const element = myArray[index];
     console.log(element);
}*/

// break and continue
/*
//break
for (let index = 1; index < 20; index++) {
     if (index == 5){
          console.log(`Detected 5`);
          break
     }
     console.log(`value of i is : ${index}`);
}*/
/*
for (let index = 1; index < 20; index++) {
     if (index == 5){
          console.log(`Detected 5`);
          continue
     }
     console.log(`value of i is : ${index}`);
}
     */


// for of

const arr = [1,2,3,4,5,6]

const greeting = "Hello world"

for (const element of greeting) {
     //console.log(element);
     //console.log(element);    
}

//Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "America")
map.set('Fr', "france")

//console.log(map);
/*
for (const [key, value] of map) {
     console.log(key, " - ", value); 
}
*/

//for in
const myObject = {
     'js':"javascript",
     "cpp":"c++",
     "rb": "ruby",
     "swift": "swift by apple"
}
/*
for (const key in myObject) {
     console.log(`${key} shortcut is for ${myObject[key]}`);
}*/

// foreach loop

const coding = ["js", "cpp", "java", "python", "ruby"]

//coding.forEach( function (item) {
  //   console.log(item);
//} )

//coding.forEach((value)=>{
  //   console.log(value);
//})

const mycoding = [
     {
          language: "javascript",
          filename: "js"
     },
     {
          language: "java",
          filename: "java"
     },
     {
          language: "c++",
          filename: "cpp"
     },
]

mycoding.forEach( (item)=> {
     console.log(item.language);
} )
