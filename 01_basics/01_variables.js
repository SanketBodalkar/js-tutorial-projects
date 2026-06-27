/**
 * Variables in JavaScript
 *there are three ways to declare variables in JavaScript: var, let, and const.
 *VAR: The var keyword is used to declare variables in JavaScript.
       It has function scope, which means that it is accessible within the function in which it is declared.
       However, it can also be accessed outside of the function if it is declared in the global scope.
       SO IT HAS bLOCK SCOPE issue, but it is not recommended to use var in modern JavaScript due to its quirks and 
       potential for unexpected behavior.

 *LET: The let keyword is used to declare block-scoped variables in JavaScript. 
       It is similar to var, but it has a more limited scope. 
       Variables declared with let are only accessible within the block in which they are declared.
 
 *CONST: The const keyword is used to declare constants in JavaScript.
         Constants are variables that cannot be reassigned after they are declared. They have block scope, just like let variables.
 */

const name = "John"; // constant variable
let age = 30;   // block-scoped variable    
var city = "New York"; // function-scoped variable not recommended to use var in modern JavaScript
mobNumber = 1234567890; // global variable (not recommended to use without var, let, or const)

// Attempting to reassign a constant variable will result in an error
//name="Doe"; // This will throw an error because name is a constant variable and cannot be reassigned

age = 31; // This is allowed because age is a block-scoped variable and can be reassigned
city = "Los Angeles"; // This is allowed because city is a function-scoped variable and can be reassigned
mobNumber = 987654321; // This is allowed because mobNumber is a global variable and can be reassigned

// we will be using let and const in modern JavaScript code, as they provide better scoping and prevent accidental variable reassignment.

//for printing the values of the variables
console.log("Name: " + name);
console.log("Age: " + age);
console.log("City: " + city);
console.log("Mobile Number: " + mobNumber);

//for checking the type of the variables
console.log("Type of name: " + typeof name);
console.log("Type of age: " + typeof age);
console.log("Type of city: " + typeof city);
console.log("Type of mobNumber: " + typeof mobNumber);

//for printing values in tabular format
console.table({ name, age, city, mobNumber });