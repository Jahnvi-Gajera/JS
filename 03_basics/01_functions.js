// function sayMyName(){                //define function
//     console.log("J");
//     console.log("a");
//     console.log("h");
//     console.log("n");
//     console.log("v");
//     console.log("i");
// }

// sayMyName()                    //access to the function    (execution)

// function add2Num(a,b) {           // Inside parantheses is called Parameter 
//     console.log(a + b);
    
// }

// add2Num(2,8)                      //Actual value is called Argument
// add2Num(2,"8")
// add2Num("2",8)
// add2Num(2,"JANVI")
// add2Num(2,null)
// add2Num(2,undefined)
// add2Num(undefined,2)
// add2Num(null,2)


function add2Num(a,b) {           
    // let result = a+b
    // return result

    return a + b               //we can also use this to to return our result   
    
    console.log(a + b);       //it will not give result coz it cant work after return being executed
}

const result = add2Num(5,7)           //storing the result 
//console.log("Result:",result);

function loginUserMsg (username = "sam"){             //default value 
    if(username === undefined){                 //equivalent line -->   if(!username)
        console.log("Plz enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMsg("Jahnvi"));
// console.log(loginUserMsg(""));
// console.log(loginUserMsg());

function calculateCartPrice(val1 ,val2, ...num1){                //rest operator
    return num1
}

//console.log(calculateCartPrice(200,90,88));

const user = {
    username: "Jahnvi",
    price: 199,
    // prices :290
}

function handleObject(anyObj){
    console.log(`Username is ${anyObj.username} and Price is ${anyObj.price}`);   
}

// handleObject(user)            or 

handleObject({
    username:"sam",
    price:339
})


//for array

const myNewArray = [200,400,600,800]

function return2ndValue(getArray){
    return getArray[1]
}

console.log(return2ndValue(myNewArray));
