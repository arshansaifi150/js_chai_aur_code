// const name = "Arshan";
// const repoCount = 50;

// console.log(name + repoCount + " Value"); //not recommanded to write like this

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //recommanded method backtiks method

const gameName = new String("Arshan-Saifi-doc");//another way of declaring string it's declared as an object

// console.log(gameName[0]);//output h

// methods of strings 

//  console.log(gameName.length);
//  console.log(gameName.toUpperCase()) 
//  console.log(gameName.charAt(2)); //charAt 2 index
//  console.log(gameName.indexOf("r")); //index of'r'

 const newString = gameName.substring(0,4);//from index 0 to 4(not included) can't handle negative input value , output Arsh
//  console.log(newString );

 const anotherString = gameName.slice(-4,3) //we can give negative value as well
console.log(anotherString);

const newStringOne = "    ANAS   ";
console.log(newStringOne); 
console.log(newStringOne.trim());//trim will remove start and end extra spaces can't remove middle space

const url = "https://yohu.com/wassup%23man" //%23 is actully space that is converted into it 

console.log(url.replace('%23', '-'));//ouput https://yohu.com/wassup-man

console.log(url.includes("wassup")); //output true

console.log(gameName.split('-'));//will split the string on the basis of dash and give an array as output
