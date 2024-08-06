// //for of loop

// const a = [1,2,3,4,5]

// for (const i of a) {
//     console.log(i);
// }

// const greeting = "hello"
// for (const greet of greeting) {
//     console.log(`Each char is ${greet}`);
// }

//maps

const map = new Map()
map.set('In',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

//console.log(map);                          //it has unique entries

for(const [key,value] of map){
    console.log(key, ':-' ,value);           //destructure
}

const myObj = {                             //obj is not iterable
    'Game1': 'NFS',
    'Game2': 'Spider'
}

for (const [key,value] of myObj) {
    console.log(key, ':-' ,value);
}

