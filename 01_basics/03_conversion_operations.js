//Conversion of datatypes in JavaScript
// JavaScript is a loosely typed language, which means that variables can hold values of different data types 
// and can be converted from one type to another. 

let Name = "John"; // string
let NameNumber= Number(Name); // converting string to number
// console.log(typeof(Name));
// console.log(typeof(NameNumber));

// console.log(NameNumber); // NaN (Not a Number) because "John" cannot be converted to a number

let Age = 30; // number
let AgeString = String(Age); // converting number to string
// console.log(typeof(Age));
// console.log(typeof(AgeString)); // "string"
// console.log(AgeString); // "30"

const isActive = false; // boolean
const isActiveString = Number(isActive); // converting boolean to string
// console.log(typeof(isActive));
// console.log(typeof(isActiveString)); // "number"
// console.log(isActiveString); // "0"

let isValid = 1; // number
let isValidString = Boolean(isValid); // converting number to boolean
// console.log(typeof(isValid));
// console.log(typeof(isValidString)); // "boolean"
// console.log(isValidString); // true

//*******************Operations on different datatypes in JavaScript*******************//

let num1 = 12 
let num2 = 5

// Addition
let sum = num1 + num2; // 17
// console.log("Sum: " + sum);

let add = num1 + "5"; // "125" (string concatenation)
// console.log("Addition: " + add);

// console.log("12" + 5 ); // "125" (string concatenation)
// console.log(5 + "12" ); // "512" (string concatenation)
// console.log(4 + 5 + "12" );// "912" (number addition followed by string concatenation)
// console.log("4" + 5 + 5 );//  "455" (string concatenation followed by string concatenation)

// Negative value

let value1 = 102 ;
let negValue= - value1; // -102
console.log("Negative value: " + negValue);

// String concatenation
let str1 = "Hello";
let str2 = "World";

console.log("Concatenated string: " + str1 + str2); // "Hello World"