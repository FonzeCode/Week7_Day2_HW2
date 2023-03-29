console.log('This is the homework!');
/*
    Exercise 1: Write a function called toCelcius that takes in a number representing 
    temperature in Fahrenheit and converts the number into Celcius.
    Ex 1. toCelcius(32) // 0
    Ex 2. toCelcius(212) // 100
    Ex 3. toCelcius(50) // 10
*/

function toCelcius(fahrenheit){
    var fTemp = fahrenheit;
    var FtoC = (fTemp - 32) * 5 / 9;
    console.log(FtoC);
};
toCelcius(50);








/*
    Exercise 2: Create a class for a User that sets username and password property
    on creation. Add a method to change the user's password. The method should take in 
    the old password and new password. If the old password is wrong do not reset the password.
    Create an instance of the new user and then change their password using the method.
*/

class User {
    constructor(name, password){
        this.name = name
        this.password = password
    }
    changePass(oldPass, newPass){
        if(oldPass !== this.password){
        console.log('The password is incorrect')
        return;
         }
    console.log('New Password')
    }
}

let user = new User('Luis', 'abc123')
user.changePass('abc', 'abc2023')
user.changePass('abc123', 'abc2023')



// let user1 = new User('brians', 'abc123');
// user1.changePassword('abc123', '123abc'); // Sets the user's password to 123abc






/*
    Exercise 3: Write a function that takes in an array of integers and returns
    an array of the negative integers squared using Array methods
    Ex 1. squareNegatives([-10, -3, 4, -2, 8, 9, -3]) // [100, 9, 4, 9]
    Ex 2. squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]) // [25, 16, 9, 4, 1]
    Ex 3. squareNegatives([2, 4, 6, 8, 10]) // []
*/

function SqNegNum(num){
    var negNum = [];
    for(var x = 0; x < num.length; x++){
        if(num[x] < 0){
            negNum.push(num[x] * num[x]);
        }
    }
    console.log(negNum);
}

SqNegNum([ -10, -3, 4, -2, 8, 9, -3 ]);
SqNegNum([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]); 
SqNegNum([2, 4, 6, 8, 10]);