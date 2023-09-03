const accountId = 1232;
let  accountEmail = "adamin@123.com";
var accountPwd = "12353";
accountCity  = "Delhi"; //can declare a variable without even writing let or var
let accountState;  //undefined variable 

// accountId = 2; not allowed to change because of const 

accountEmail = "heyman@gmail.com";
accountPwd = "5678576";
accountCity = "goa"
console.log(accountId);


/* 
Prefer not to use var cuz of issue in block scope and functional scope ;
*/

console.table([accountId,accountEmail,accountPwd,accountCity,accountState]);
