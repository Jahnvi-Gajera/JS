const accountId = 144553
let accountEmail = "Jahnvi025@gmail.com"
var accountPAssword = "12345"
accountCity = "Surat"
let accountState;

// accountId = 2 // not allowed
accountEmail = "jg@gmail.com"
accountPAssword = "10"
accountCity = "Ahmedabad"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPAssword,accountCity,accountState])