//if

const isUserloggedIn = true
const temp = 41

// if(isUserloggedIn){
//     console.log("Welcome Jahnvi");   
// }

// if(2 === "2"){                    //checks datatype
//     console.log("Executed");
// }


// if(temp < 50){
//     console.log("less than 50");
// }
// console.log("greater than 50");


// if(temp === 41){                   //strictly check
//     console.log("equal");
// }


// if-else

// if(temp === 41){
//     console.log("less than 50");
// }
// else{
//     console.log("greater than 50");
// }

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(User power: ${power});
// }
// console.log(User power: ${power});                   //out of scope (cannot execute)

//* hence we did not use var instead of const becoze it has global scope


// Short-hand notation

// const balance =1000

// if(balance >500) console.log("test"),console.log("test2");                //implicit scope

// but we cannot use this type of code becoz it is unreadable


//else-if ladder

// if(balance >500){
//     console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 750");
// }else{
//     console.log("less than 1000");
// }

const userLogin = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLogin && debitCard){
    console.log("Enjoy your shopping");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
}