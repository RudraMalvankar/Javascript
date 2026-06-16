let score = " 33  "

// console.log(typeof score); // this will print "number" because score is a number data type
// console.log(typeof (score)); // this will also print "number" because score is a number data type

let valueInNumber = Number(score) // this will convert the string "33" to a number 33
// console.log(typeof valueInNumber); // this will print "number" because valueInNumber is now a number data type
// console.log(valueInNumber); // this will print 33 because the string "33" has been converted to a number 33


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn) // this will convert the number 1 to a boolean true
// console.log(booleanIsLoggedIn); // this will print true because the number 1 is truthy and has been converted to a boolean true
// console.log(typeof booleanIsLoggedIn); // this will print "boolean" because booleanIsLoggedIn is now a boolean data type

// 1 => true; 0 => false
// "" => false; "rudra" => true

let someNumber = 33

let stringNumber = String(someNumber) // this will convert the number 33 to a string "33"
// console.log(stringNumber);
// console.log(typeof stringNumber); 

// ********************************** Operation in Javascript ********************************** 

let value = 3
let negValue = -value
// console.log(negValue)


// +, -, *, /, **, % Basic arithmetic operators in js
/*
console.log(2+2) // this will print 4 because it is the result of adding 2 and 2
console.log(2--2) // this will print 0 because it is the result of subtracting 2 from 2
console.log(2*2) // this will print 4 because it is the result of multiplying 2 and 2
console.log(2**2) // this will print 4 because it is the result of raising 2 to the power of 2
console.log(2/2) // this will print 1 because it is the result of dividing 2 by 2
console.log(2%2) // this will print 0 because it is the result of finding the remainder when 2 is divided by 2  */


let str1 = "Hello"
let str2 = " World"

let str3 = str1 + str2 // this will concatenate the two strings "Hello" and " World" to form "Hello World"
//console.log(str3) 

/*
console.log("1" + 2) // this will print "12" because the number 2 is converted to a string and concatenated with the string "1"
console.log(1 + "2") // this will also print "12" because the number 1 is converted to a string and concatenated with the string "2"
console.log("1" + "2") // this will print "12" because both operands are strings and are concatenated together
console.log ("1" + 2 + 3) // this will print "123" because the number 2 is converted to a string and concatenated with the string "1", and then the number 3 is also converted to a string and concatenated with the result, resulting in "123"
console.log(1 + 2 + "3") // this will print "33" because the numbers 1 and 2 are added together to get 3, and then the number 3 is converted to a string and concatenated with the result, resulting in "33"
*/

// console.log(+true)
// console.log(+"")


let gameCounter = 100
gameCounter++ // this will increment the value of gameCounter by 1, so gameCounter will now be 101
 console.log(gameCounter) // this will print 101 because gameCounter has been incremented by 1


// ++a will increment the value of a before it is used in an expression, while a++ will increment the value of a after it is used in an expression. For example:

let a = 5
console.log(++a) // this will print 6 because the value of a is incremented before it is used in the expression
console.log(a) // this will also print 6 because the value of a has been incremented to 6

// ++a will convert the value of a to a number before it is used in an expression, while a+ will not perform any conversion. For example:

let b = "5"
console.log(++b) // this will print 6 because the value of b is converted to a number and then incremented before it is used in the expression
console.log(b) // this will also print 6 because the value of b has been converted to a number and incremented to 6