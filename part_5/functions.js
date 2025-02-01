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
console.log(result);

