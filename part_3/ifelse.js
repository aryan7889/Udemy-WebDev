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
// checking(25);
// checking(12);


// Write a program to find the largest of two numbers.

function findlargest(num1 ,num2) {
    if (num1 > num2) {
        console.log(`${num1} is greater then ${num2}`);
        
    }else if (num2 > num1) {
        console.log(`${num2} is greater then ${num1}`);
        
    }else{
        console.log("both are equal");
        
    }
    
}
// findlargest(10, 20);
// findlargest(20, 10);
// findlargest(10, 10);

//Write a program that determines whether a given year is a leap year.

function leapyear(year) {
    if (year % 4 === 0) {
        console.log( `${year} is the lear year`);    
    } else {
        console.log(`${year} is not the leap year`);
        
    }
    
}
// leapyear(2020);
// leapyear(2021);



// Write a program to check if a number is positive, negative, or zero.
function checknumber(numbers) {
    if (numbers > 0) {
        console.log(`this ${numbers} is positive.`);
    }else if (numbers < 0) {
        console.log(`this ${numbers} is negative or less than zero.`);
    }else{
        console.log(`number is equal to zero.`);
        
    }
    
}
// checknumber(5)
// checknumber(-1)
// checknumber(0)

// Problem:
// Write a program that assigns a grade based on a student’s marks.
function grades(marks){
    if (marks >= 90) {
       console.log(`your ${marks} are greater than 90 so you are given
        grade A`);}else
         if (marks >= 80) {
            console.log(`${marks} == B grade.`);
        }else if (marks >= 70) {
            console.log(`GRADE C`);     
        }else{
            console.log(`you failed.`);
            
        }

}
// grades(60)

// Write a simple login validation system.
function login(username, password){
    let storeduser = "admin"
    let storedpassword = "abc"
    if (username === storeduser && password === storedpassword) {
        console.log(`ready to launch`);
        
    } else {
        console.log(`Invalid username or password.`);
        
    }
}
// login("admin", "abc")


/*
Memory updated
Great! Here are some more challenging if-else practice problems that will push your problem-solving skills further.

1. FizzBuzz Challenge
Problem:
Write a program that prints numbers from 1 to 100. But for multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

Hint:
Use the % (modulus) operator to check divisibility.
*/

function FizzBuzz(){
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`FIZZBUZZ`);
        }else if (i % 3 === 0) {
            console.log(`Fizz`);
        }else if (i % 5 === 0) {
            console.log(`Buzz`);         
        }else {
            console.log(i);   
        } 
    }
}

// FizzBuzz()


/*
2. Triangle Type Checker
Problem:
Write a JavaScript function that takes three side lengths as input and determines if the triangle is:

Equilateral (all sides are equal),
Isosceles (two sides are equal),
Scalene (no sides are equal),
Not a Triangle (sum of any two sides must be greater than the third side).

*/

function triangle(side1, side2, side3){
    if (side1 === side2 === side3&& side1 + side2 > side3) {
        console.log(`triangle is the equilateral`);
        }else if (side1 === side2 && side2 !== side3 && side1 !==side3 &&
            side1 + side2 > side3) {
            console.log(`triangle is the isosceles triangle.`);
        }else if (side1 !== side2 && side2 !== side3 && side1 !==side3 &&
            side1 + side2 > side3) {
            console.log(`triangke is scalene triangle`);
        }else {
            console.log(`triangle is not valid.`);
            
        }
}
triangle(5,6,6)