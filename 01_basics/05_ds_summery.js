// Primitive Datatypes

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123')      //symbol
const id2 = Symbol('123')

console.log(id==id2);

const bigNumber = 124534756723453631643n;      //bigInt



// Non-Primitive Datatypes(Reference type)

//Array , Objects ,Functions

const heroes = ["Shaktiman","Naagraj","Doga"]       //array

let myObj = {                                     //Object
    name: "Jahnvi",
    age: 19,
}

const myFunction = function(){                   //function
    console.log("Hello");
}


// Stack and Heap memory

//Stack example(Does not change value in original)

let myYTName = "Chai and Code"
let anotherName = myYTName
anotherName = "Coding Adda"
console.log(myYTName);
console.log(anotherName);

//Heap example(changes value in both)

let user1 = {
    email: "Janvi@gmail.com",
    Name: "Janvi",
}
let user2 = user1;
user2.email = "deven@gmail.com"

console.log(user1.email);
console.log(user2.email);