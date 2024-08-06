// const coding = ["js","rb","py","swift","cpp"]

// const values = coding.forEach( (item) => {
//     //console.log(item);  
//     return item
// })                                                    // not returning anything

// console.log(values);

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// //let newNums = myNums.filter( (num) => num > 4)
//                 //OR
// // const newNums = myNums.filter( (num) => {
// //     return num>4                                           //must write return (Scope concept)
// // })

// const newNums = []

// myNums.forEach( (num) => {                //or
//     if(num>4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);


const books = [
    {
        title:"book1",genre:"Fiction",publish:"1981"
    },
    {
        title:"book2",genre:"Non-Fiction",publish:"1989"
    },
    {
        title:"book3",genre:"Fiction",publish:"1977"
    },
    {
        title:"book4",genre:"Non-Fiction",publish:"1945"
    },
    {
        title:"book5",genre:"Fiction",publish:"1978"
    },
]

let userBooks = books.filter( (bk) => bk.genre === "Fiction")

userBooks = books.filter( (bk) => { return bk.publish < 1955})

console.log(userBooks);
