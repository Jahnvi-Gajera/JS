// const marvel_heroes = ["thor","Ironman","spiderman"]
// const dc_heroes = ["superman","flash","batman"]

//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes);

//const all_heroes = marvel_heroes.concat(dc_heroes)
//console.log(all_heroes);

// const all_new_heroes = [...marvel_heroes,...dc_heroes]        //similar to concate method
// //console.log(all_new_heroes);

// const another_array = [1,2,3,[4,5,6],[7,8,[9]]]
// const real_another_array = another_array.flat(Infinity)       // to spreadout the values
// console.log(real_another_array);


// console.log(Array.isArray("jahnvi"));           // to ask if given is array or not
// console.log(Array.from("jahnvi"));           //to convert it into the array
// console.log(Array.from({name:"jahnvi"}));      //need to tell either we want to convert keys or values to the string   (interesting for an interview)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
