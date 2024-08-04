// const user = {
//     username: "Jahnvi",
//     price: 999,

//     welcomeMessage: function () {
//         console.log(`${this.username} , welcome to website`);         //this to refers to current context
//         console.log(this);
//     }
// }

// user.welcomeMessage();
// user.username = "Sam"
// user.welcomeMessage();

// console.log(this);              // *Global object is window obj in browser (interview Q.)

// function chai(){
//     username: "JAhnvi",
//     console.log(this);
//     //console.log(this.username);        //not used in dunction
    
// }

// chai()


//***declaration of function using arrow***

// const chai = () => {
//     let username = "Jahnvi"
//     console.log(this.username);           //same case as function
//     console.log(this);                    //gives empty {}

        // its wrong to say in interview that in arrow function we cannot use this keyword

// }

// chai()

// const add2 = (num1,num2) => {     //basic arrow function   OR explicit function (if we use curly braces it's compulsory to write return)
//     return num1 + num2
// }

// console.log(add2(2,3));

// const add2 = (num1,num2) => (num1 + num2 )            //implicit function (no need to write return here)

// console.log(add2(2,3));


// to written object

// const add2 = (num1,num2) => {username: "Jahnvi"}

// console.log(add2(2,3));             // gives undefined (cause without () we cannot define any object)


//correct way of defining object using arrow function
const add2 = (num1,num2) => ({username: "Jahnvi"})

console.log(add2(2,3));


//also used in loops

const myArray = [2,5,6,8]

myArray.forEach(() => {})      //small explanamtion by example