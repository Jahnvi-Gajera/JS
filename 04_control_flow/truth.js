//const email = "j@gmail.com"
//const email = ""
// const email = []

// if(email){
//     console.log("got mail");
// }else{
//     console.log("don't have mail");
// }


//Falsy values -->          false,0,-0,BigInt,0n,null,"",'',undefined,NaN

//Truthy values -->         true,"0",'false',"false"," ",[],{},function(){} -->empty function

// if(email.length === 0){
//     console.log("Array is empty");
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("empty");
    
//}


//Nullish coalescing Operator(??)

//let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10               //if we get null it will assign right side value
//val1 = undefined ?? 20
// val1 = null ?? 15 ?? 20

// console.log(val1);


// terniary operator

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80");