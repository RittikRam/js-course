// myObj = {
//     name : "Rittik",
//     age : 25,
//     email : "ram@gmail.com"
// }

// // console.log(myObj)

// myObj.greet = function(){
//     console.log("Hello")
// }
// myObj.greet2 = function(){
//     console.log(`Hello ${this.name}`)
// }
// myObj.greet()
// myObj.greet2()

// // ob1 = {
// //     1:"a",
// //     2:"b",
// //     3:"c"
// // }

// // obj2 = {
// //     4:"d",
// //     5:"e"
// // }
// // // const ob3 = Object.assign(ob1,obj2);
// // const ob3 = {...ob1, ...obj2};
// // console.log(ob3);


// myObj = {
//     name : "Rittik",
//     age : 25,
//     email : "ram@gmail.com"
// }

// console.log(Object.keys(myObj));

// console.log(Object.values(myObj));

// console.log(Object.entries(myObj));


// console.log(myObj.hasOwnProperty("name"));

const course = {
    name : "jsInHindi",
    price : 999,
    instructor:"Hitesjh"
}

const {instructor : ins} = course

console.log(ins);
