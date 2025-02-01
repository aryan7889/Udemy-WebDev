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
login("admin", "abc")