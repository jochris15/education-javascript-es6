'use strict'
// //! kodingan dibawah jadi error karena pake use strict

// x = 10
// console.log(x);


// //! Function
// function sum(a, b) {
//     return a + b
// }

// console.log(sum(3, 10));

// //! Anonymous function, biasa digunakan ketika butuh function yang dipassing sebagai argumen dari function lain
// const multiply = function (a, b) {
//     return a * b
// }

// console.log(multiply(3, 3));

// //! Arrow function, evolusi dari anonymous function
// const min = (a, b) => {
//     return a - b
// }

// console.log(min(10, 5));

// //! One line arrow function
// const divide = (a, b) => a / b
// console.log(divide(15, 3));

// //! Spread , digunakan ketika ingin mengambil value dari data non primitive (array & object) tanpa mempengaruhi data aslinya

// //! Array
// const array1 = [1, 2, 3, 4, 5]
// const newArr = [...array1, 6, 7, 8]
// newArr.push(9)

// console.log(array1);
// console.log(newArr);

// //! Object
// const obj1 = {
//     name: "Kris",
//     age: 25,
//     hobby: "weebs"
// }

// const newObj = {
//     ...obj1
// }

// newObj.gender = "male"

// console.log(obj1);
// console.log(newObj);

// //! Destructuring , sering digunakan untuk "unpack" value dari array / object menjadi sebuah variable baru

// //! Array
// const arrNumber = [1, 2, 3, 4, 5]
// const [num1, num2, num3] = arrNumber

// console.log(num1, num2, num3);

// //! Object
// const objPeople = {
//     fullName: "Yohanes Kris",
//     age: 25,
//     hobby: "weebs"
// }

// const { fullName, age, hobby } = objPeople
// console.log(fullName, age, hobby);

// //! Module Exports, digunakan untuk export variabel / function agar bisa digunakan di tempat lain
// const newFunction = () => {
//     return "testing module.exports"
// }

// const newObj = {
//     fullName: "Josh",
//     age: 27,
//     hobby: "Gaming"
// }

// module.exports = { newFunction, newObj }

// //! Slice, digunakan untuk memotong sebuah array
// //! slice(start,end)
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2));
// console.log(animals.slice(3, 4));

// //! Join, digunakan untuk merubah array jadi string
// //! join(separator)
// const elements = ['Fire', 'Air', 'Water'];
// console.log(elements.join());
// console.log(elements.join("-"));

// //! ForEach, digunakan untuk melooping suatu array
// //! forEach(cbFunction)
// const array1 = ['a', 'b', 'c'];
// array1.forEach((element) => console.log(element));

// //! Map, digunakan untuk membuat array baru dengan data dari array lama yang dimanipulasi
// //! map(cbFunction)
// const array1 = [1, 4, 9, 16];
// const map1 = array1.map((x) => x * 2);
// console.log(map1);


// //! Filter, digunakan untuk menfilter suatu array
// //! filter(cbFunction)
// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter((word) => word.length > 6);
// console.log(result);

// //! Process argv, digunakan untuk mengakses dan berinteraksi dengan argumen dari command promt
// const [input1, input2] = process.argv.slice(2)
// console.log(input1, input2);


// //! Optional Chaining, digunakan untuk mengakses object secara aman, jika propertynya undefined/null tidak akan error tetapi memberikan value undefined
// const objInstructor = {
//     fullName: "Josh",
//     age: 27,
//     hobby: "Gaming"
// }

// console.log(objInstructor?.lastName?.gender);

// //! Ternary Operation, alternatif dari if else
// function getFee(isMember) {
//     return isMember ? '$2.00' : '$10.00';
// }

// console.log(getFee(true));
