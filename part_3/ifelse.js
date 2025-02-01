// Write a JavaScript program to check if a given number is even or odd.
function checkforevenorodd(numbers) {
    if (numbers % 2 === 0) {
        console.log(`${numbers} is even.`);
        
    } else {
        console.log(`${numbers} is odd.`);
        
    }
}
// checkforevenorodd(10);
// checkforevenorodd(5)


// Write a program that checks if a person is eligible to vote 
// based on their age (18 or above).

function checking(age) {
    if (age >= 18) {
        console.log("person is able to vote.");
        
    } else {
        console.log("person is not able to vote.");
        
    }
}
checking(25);
checking(12);