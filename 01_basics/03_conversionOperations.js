// // let score = 33;
// // console.log(typeof score);  output as number
// // console.log(typeof(score));

let score = "33" 
let score2 = "33abc"
let score3 = null;
let score4 = undefined;
let score5 = true;
let score6 = "Arshan"
// console.log(typeof score); output as string

let valueInNumber = Number(score);
console.log(typeof valueInNumber); //output number
console.log(valueInNumber); //output 33

let secondValueInNumber = Number(score2); 
console.log(typeof score2); //output number
console.log(secondValueInNumber); //output NaN (not a number)

let thirdValueInNumber = Number(score3);
console.log(typeof thirdValueInNumber); //output number
console.log(thirdValueInNumber); //output 0


let fourthValueInNumber = Number(score4);
console.log(typeof fourthValueInNumber); //output number
console.log(fourthValueInNumber); //output NaN

let fifthValueInNumber = Number(score5);
console.log(typeof fifthValueInNumber); //output number
console.log(fifthValueInNumber); //output 1


let sixthValueInNumber = Number(score6);
console.log(typeof sixthValueInNumber); //output number
console.log(sixthValueInNumber); //output NaN 

 

let isLoggedIn = 1;
// 1 => true ; 0=> false
//"Arshan" => true ; ""=>false
let boolanConversion = Boolean(isLoggedIn);
console.log(boolanConversion);

let num = 33;
let numToString = String(num);
console.log(typeof numToString); //string output => 33



/********************operations************ */

let value = 3;
let negValue = -value;
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2);


let str1 = "Hello";
let str2 = " Arshan";
let str3 = str1 + str2;
console.log(str3); //output Hello Arshan 

console.log("1" + 2); //output 12
console.log(1 + "2"); //output 12
console.log("1" + 2 + 2);//output 123
console.log(1 + 2 +"2"); //output 32 => 1+2 and "2"get concatinated

console.log(true);//output true
console.log(+true); //output 1 

console.log(+"");//output 0

let num1 , num2, num3;

num1 = num2 = num3 = 2+2;

console.table([num1,num2,num3])  //output 4,4,4

let gameCounter = 2;
++gameCounter; //output 
gameCounter++;

console.log(gameCounter);







