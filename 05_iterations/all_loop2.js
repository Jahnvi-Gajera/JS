// const myObj = {
//     js: "JavaScript",
//     cpp: "C++",
//     py: "Python",
//     rb: "ruby",
//     swift: "Swift by app",
// }

// for (const key in myObj) {
//     //console.log(key);
//     //console.log(myObj[key]);
//     console.log(`${key} shortcut is for ${myObj[key]}`);    //for in loop works for obj   
// }

// const programming = ["js","rb","py","swift","cpp"]

// for (const key in programming) {
//     //console.log(key);              //not working
//     console.log(programming[key]);
// }

const map = new Map()                              //not iteratable
map.set('In',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

for (const key in map) {
    console.log(key);
}