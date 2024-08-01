// singleton   -->Object.create (constructor method)

//object literals

const mySym = Symbol("key1")

const JsUser = {                          //another way of creating object
    name: "Jahnvi",
    "full name": "Jahnvi Gajera",
    [mySym]: "myKey1",
    Age: 19,
    Location: "Surat",
    email: "jahnvi0@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);       //another way of printing value
// //console.log(JsUser.full name);      //not Allowed
// console.log(JsUser["full name"]);
// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym);        //undefined
// console.log(JsUser[mySym]);

// JsUser.email = "JAhnvi2@gmail.com"          //to overwrite the value
// Object.freeze(JsUser)                       // to freeze values
// JsUser.Age = 20
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello World");
}

JsUser.greeting2 = function(){
    console.log(`Hello World, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());