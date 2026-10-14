console.log("This is my first program")
console.log("Hello John your monthly salary is 50000")

// Example 2 //

const num1 = 5;
const num2 = 3;

// add two numbers 
const sum = num1 + num2;
// display the sum
console.log('The sum of '+ num1 + ' and ' + num2 + ' is: '+ sum);

// example  //

const prompt = require('prompt-sync')();
console.log("starting")
const name = prompt('Enter your Name:  ');
console.log("Hello," + name);

const number = parseInt(prompt("Enter a Number: ") );

if (number > 0 ) {
    console.log("The number is positive");
}

else if (number == 0) {
console.log("The number is zero");
}

else { 
    console.log("The number is Negative");
}
