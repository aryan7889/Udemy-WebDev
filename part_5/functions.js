// problem 1 
/*
write a function named maketea that takes one parameter typeoftea 
and returns a string like "making green tea " when called with green tea
store the results in a variable named teaOrder
*/
// function greet(name) {
//     console.log(`Hello ${name}`);
// }
// greet("aryan")


function maketea(typeoftea) {
    
    return `Making ${typeoftea}`;
    // console.log(test);
}
let teaOrder = maketea("lemon tea")
// console.log(teaOrder);


/*
Create a function named OrderTea that takes one parameter teatype. Inside 
this function create another function named confirmed order that returns a message like 
"order is confirmed for chai"
call confirmedorder from within ordertea and return the result.
*/

function ordertea(teatype) {
    function confirmedorder(params) {
        return `Order confirmed for Chai`
    }
return confirmedorder()
}
let orderconfirmation = ordertea("chai")
// console.log(orderconfirmation);


/*
Write an arrow function named calculatetotal taht takes two parameter:
price and quantity. the function should return the total cost by multiplying 
the price and quantity.
Store the result in a variable named total cost.
*/

// ARROW FUNCTION:
const calcutetotal = (price, quantity) => price * quantity



let totalcost = calcutetotal(499 * 100)
// console.log(totalcost);


// problem 4
function maketea(typeoftea) {
    return `make tea ${typeoftea}`
}

function processTeaOrder(fn) {
    return fn(`earl grey`)
}
 let order = processTeaOrder(maketea)
// console.log(order);

// problem 5:
/*
Write a function named createteaMaker that returns 
another function, The return function should take one parameter teatype
and returns a message like "making green tea."

*/
function createTeaMaker(name) {
    let score = 100
    return function (teatype) {
        
        return `Making ${teatype} ${name} ${score}`
    }
}

let teamaker = createTeaMaker("hitesh");
let result = teamaker("green tea")
// console.log(result);

/*
📝 Problem 1: Create a Simple Calculator
🔹 Task: Write a function calculator that takes two numbers and a string for the operation 
(e.g., "add", "subtract", "multiply", "divide") and returns the result.
*/

function calculator(num1, num2, operation){
    if (operation === "add") {
        let add = num1 + num2
       return add;
    } else if (operation === "subtract"){
        if (num2>num1) {
           return "not valid subtraction."
        }
        let subtract = num1 - num2;
        return subtract;
    }else if (operation === "multiply") {
        let multiply = num1 * num2
       return multiply;
    }else if(operation === "divide"){
        if (num2 === 0) {
           return "invalid input"
        }
        return num1/num2
    }else
    {
        return "invalid operation"
        
    }
}
// console.log(calculator(4,2,"add"));
// console.log(calculator(4,2,"subtract"));

// console.log(calculator(4,2,"multiply"));
// console.log(calculator(4,8,"subtract"));

// problem2 
// 📝 Problem 2: Find Factorial of a Number (Iterative)
// 🔹 Task: Write a function factorialIterative(n) that 
// calculates the factorial of a number iteratively.

function factorialIterative(n){
    let result = 1
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
// console.log(factorialIterative(5));

// problem 3 
// 📝 Problem 3: Reverse a String
// 🔹 Task: Write a function reverseString(str) that takes a string and returns it reversed.

function reversestr (str){
    let reverse = "";
    for (let i = str.length-1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse
}
// console.log(reversestr("hello"));

// method 2:

function reversestr(str){
    return str.split("").reverse().join("")
}
// console.log(reversestr("aryan"));

// 📝 Problem 4: Check if a String is Palindrome
// 🔹 Task: Write a function isPalindrome(str) that checks 
// whether the given string is a palindrome or not.

function isPalindrome(str){
    let reverse = "";
    for (let i = str.length - 1; i>=0; i--) {
        reverse += str[i];
    }if (reverse === str) {
        console.log("is a palindrome");
    }else {
        console.log("not a palindrome");
    }
    return reverse

}
// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("aryan"));

function isPalindrome(str) {
    let reverse= str.split("").reverse().join("")
    if (reverse === str) {
        console.log("is palindrome");
    } else {
        console.log("not a palindrome");
    }
    return reverse
}
// console.log(isPalindrome("racecar"));


// 📝 Problem 5: Fibonacci Sequence (Recursive)
// 🔹 Task: Write a recursive function fibonacci(n) that 
// returns the nth number in the Fibonacci sequence.

function fibonacci (n){
if(n===0){
    return 0;
}else if(n===1){
    return 1;
}
return fibonacci(n-1)+fibonacci(n-2)
}
console.log(fibonacci(4));
