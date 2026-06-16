"use strict"; // enables strict mode which helps catch common coding errors and "unsafe" actions such as assigning values to undeclared variables

//alert("3+3"); // this wiwll not work in node.js environment, it is used in browser environment to display an alert box with the specified message


let name = 'Rudra'       // string data type
let age = 20              // number data type
let isLoggedIn = false    // boolean data type

//types of Primitive Data types in javascript ==>
//number => 2 to power 53
// bigint 
// string => sequence of characters
//boolean => true or false
//null => empty value (standalone value
//undefined => value not assigned
//symbol => unique and immutable value


//objects 

console.log(typeof null) // this will print "object" because null is considered an object in JavaScript, even though it represents the absence of any value
console.log(typeof undefined) // this will print "undefined" because undefined is a primitive data type that represents the absence of a value or an uninitialized variable
