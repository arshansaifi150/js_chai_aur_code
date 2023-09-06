//Dates


// let myDate = new Date()
// console.log(myDate.toString()); // output date and time in complex form
// console.log(myDate.toDateString()); //output Current Date
// console.log(myDate.toLocaleString());//output date is MM/DD/YEAR format
// console.log(typeof(myDate)); // output Object

// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString()); //output Mon Jan 23 2023
// console.log(myCreatedDate.toLocaleDateString());//output 1/23/2023

// let secondate = new Date("2023-01-14") //yy/mm/dd mathed
let thirdDate = new Date("01-14-2023") // mm/dd/yy format
// console.log(thirdDate.toLocaleString());

let myTimeStamp = Date.now() 
// console.log(myTimeStamp); //timestamp  in ms
// console.log(thirdDate.getTime()); //timestamp  in ms
// console.log(Math.floor(Date.now()/1000)); //converted in sec


let newDate = new Date();
// console.log(newDate.getDate());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getHours());
// console.log(newDate.getTime());

console.log(newDate.toLocaleString('default',{
    weekday:"narrow"
    
}));

