console.log(2 > 1);
console.log(2 < 1);
console.log(2 >= 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" >1); //output true
console.log("02" > 1); //output true

console.log(null > 0); //output false
console.log(null == 0); //output false
console.log(null >= 0); //output true

/* Reason => equality check == and comparision ( >, < , >=,<=) works differently
Comparisions convert null to a number, treating it as 0.
That's why null>=0 is true and null>0 is false
*/

// undefined gives false in all these cases if we check it

// === (strict equal) it matches the data type as well
console.log("2" == 2); //output true
console.log("2" === 2); //output false



