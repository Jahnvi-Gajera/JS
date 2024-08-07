const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,curruentVal) {
//     console.log(`acc: ${acc} and cur Value: ${curruentVal}`);
//     return acc + curruentVal
// } , 0)
                         
//OR

const myTotal = myNums.reduce( (acc,curruentVal) => acc + curruentVal, 0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 3000,
    },
    {
        itemName: "Python",
        price: 2000,
    },
    {
        itemName: "Web Devlopment",
        price: 5000,
    }
]

const PriceToPay = shoppingCart.reduce( (acc,item) => acc + item.price,0)
console.log(PriceToPay);
console.log("Thank you");
