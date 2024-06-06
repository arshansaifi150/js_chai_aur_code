const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

// const userOne =  User("hitesh", 12, true)
// const userTwo =  User("ChaiAurCode", 11, false) //user two will overwrite user one 

const userOne = new User("hitesh", 12, true) //new keyword creates a new instance/object
const userTwo = new User("ChaiAurCode", 11, false)// now usertwo will not overwrite userone
console.log(userOne.constructor);
//console.log(userTwo);
