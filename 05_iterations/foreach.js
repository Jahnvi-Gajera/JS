//for each loop

const coding = ["js","rb","py","swift","cpp"]

// // coding.forEach(function (item) {
// //     console.log((item));
    
// // })

// coding.forEach( (item) => {                             //callback function using arrow function
//     console.log(item);
    
// })        

// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe)

// coding.forEach( (item,index,array) => {
//     console.log(item,index,array);
    
// })

const myCode = [
    {
        languageName: "Javascript",
        languageFile: "JS",
    },
    {
        languageName: "Java",
        languageFile: "J",
    },
    {
        languageName: "python",
        languageFile: "py",
    }
]

myCode.forEach( (item) => {
    console.log(item.languageName);
    console.log(item.languageFile);    
})