let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toISOString());
//console.log(myDate.toLocaleString());
//console.log(typeof(myDate));
//console.log(myDate.getDate());
//console.log(myDate.getDay());

const newdate = new Date(2024, 2, 23)
//console.log(newdate.toDateString());

let mytimestamp = Date.now()
//console.log(mytimestamp);
//console.log(newdate.getTime());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getUTCDay());

const date1 = newDate.toLocaleString('default', {
     weekday: "long",
})

console.log(date1);