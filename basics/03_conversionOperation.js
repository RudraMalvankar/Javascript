let score = " 33  "

console.log(typeof score); // this will print "number" because score is a number data type
console.log(typeof (score)); // this will also print "number" because score is a number data type

let valueInNumber = Number(score) // this will convert the string "33" to a number 33
console.log(typeof valueInNumber); // this will print "number" because valueInNumber is now a number data type
console.log(valueInNumber); // this will print 33 because the string "33" has been converted to a number 33


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn) // this will convert the number 1 to a boolean true
console.log(booleanIsLoggedIn); // this will print true because the number 1 is truthy and has been converted to a boolean true
console.log(typeof booleanIsLoggedIn); // this will print "boolean" because booleanIsLoggedIn is now a boolean data type

// 1 => true; 0 => false
// "" => false; "rudra" => true

let someNumber = 33

let stringNumber = String(someNumber) // this will convert the number 33 to a string "33"
console.log(stringNumber);
console.log(typeof stringNumber); 
