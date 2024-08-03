// //const tinderUser = new Object()

// const tinderUser = {}              //singleton object
// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false

// //console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// const regulerUser = {
//     email: "Jahnvi24@gmail.com",
//     fullName: {
//         userFullname: {
//             firstName: "Jahnvi",
//             lastName: "Gajera",
//         }
//     }
// }

// // console.log(regulerUser.fullName);
// // console.log(regulerUser.fullName?.userFullname);


// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"a",4:"b"}

// // const obj3 = Object.assign({},obj1,obj2)
// // console.log(obj3);

// const obj3 = {...obj1,...obj2}          //Another way of combining objects
// //console.log(obj3);               

// const users = [                         //object of an array
//     {
//     id: 1,
//     email: "j@gmail.com",
//     },
//     {
//         id: 1,
//         email: "j@gmail.com",
//     },
//     {
//         id: 1,
//         email: "j@gmail.com",
//     },
// ]

// users[1].email
// console.log(Object.keys(users));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseTeacher: "Hitesh Sir",
}

const {courseTeacher: teacher} = course   //easy way to access the elements of the object

console.log(teacher);

// const navbar = ({company}) => {         //Destructuring of the object

// }

// navbar(company = "Google")

// {                                     //JSON
//     name: "Jahnvi",
//     coursename: "JavaScript",
//     price: "free",
// }

