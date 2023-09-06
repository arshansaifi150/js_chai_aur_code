//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER: ", a); //ouptu a=10
    
}



// console.log(a);//output a=300
// console.log(b);
// console.log(c); //will give 30 output instead of 300


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) //it will execute and print

function addone(num){
    return num + 1
}



addTwo(5) //it will not execute and will not print
const addTwo = function(num){
    return num + 2
}