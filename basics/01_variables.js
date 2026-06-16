const accountId = 144553
let accountEmail = "john.doe@example.com"
var accountPassword = "password123"
accountCity = "Mumbai"
let accountState; // this will be undefined as it has not been assigned a value yet

// accountId = 22  // this will throw an error because accountId is a constant and cannot be reassigned

accountEmail = "test@gmail.com" // this is allowed because accountEmail is declared with let, which allows reassignment
accountCity = "New York"        // this is allowed because accountCity is declared with var, which allows reassignment
accountPassword = "newpassword456" // this is allowed because accountPassword is declared with var, which allows reassignment

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);  // this will print the values of the variables in a table format
console.log(accountId); // console.log(accountEmail); // this will print the value of accountEmail

/*
Prefer not to use var
 for variable declaration as it is function-scoped and can lead to unexpected behavior.
  Instead, use let for variables that may change and const for variables that should not be reassigned.

  beacuse of Block scope and funtional scope 
*/
