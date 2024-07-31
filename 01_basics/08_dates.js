// Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log( typeof myDate);

//  let myCreatedDate = new Date(2024,0,12)
// let myCreatedDate = new Date(2024,0,12,5,3)
// let myCreatedDate = new Date("2024-01-12")
// let myCreateddate = new Date("01-14-2024")
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreateddate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateddate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long"
})


