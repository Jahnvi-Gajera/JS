let score = false

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1 , false => 0

let isLOggedIn = ""
let booleanIsLoggedIn = Boolean(isLOggedIn)
console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false
// "" => false 
// "jal" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


//************************************Oprations********************************************

let value = 3
let negValue = -value
console.log(negValue);

console.table([2+2,2*2,2-2,2**2,2/3,2%3])

let str1 = "Hello"
let str2 = " Jahnvi"

let str3 = str1 + str2
console.log(str3)
console.log("1" + "2");
console.log("1" + 2);
console.log(2 + "1");
console.log("1" + 2 + 2);
console.log(1 + 2 + "1");
console.log(1 + "2" + 1);
console.log(+true);
console.log(+"");

let gameCounter = 100
++gameCounter;
console.log(gameCounter);