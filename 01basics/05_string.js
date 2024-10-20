const name = "hitesh"
const repocount = 50

//console.log(name + repocount + " value");
//console.log(`Hello my name is  ${name} and my repo count is ${repocount} `);

const gameName = new String("hitesh-hc-com")

//console.log(gameName.__proto__);

//console.log(gameName.toUpperCase());
//console.log(gameName.length);
//console.log(gameName.charAt(4));
//console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
//console.log(newString);

const anotherString = gameName.slice(0,4);
//console.log(anotherString);

const url = "https://hitesh.com/hitesh%20chodhary"

console.log(url.replace('%20', '-'))
console.log(url.includes('tesh'));
console.log(gameName.split('-'));