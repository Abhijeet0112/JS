const accountId = 12345;
let accountEmail = "abhijeet@gmail.com";
var accountPassward = "Pass@123";
accountCity = "Kolhapur";
let accountState;
var accountName;

//const balance; => (SyntaxError: Missing initializer in const declaration)

//accountId = 123456; => (TypeError: Assignment to constant variable.) - this is not allowed you can't change constant

accountEmail = "ab@gmail.com";
accountPassward = "654321";
accountCity = "Sangli";

console.log(accountId);

console.table([accountId,accountEmail,accountPassward,accountCity,accountState, accountName]);
