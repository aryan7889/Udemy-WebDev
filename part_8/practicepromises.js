// JavaScript Promises Exercises & Solutions

// ============================================================================
// Exercise 1: Creating and Using a Basic Promise
// ============================================================================
// Task: Create a promise that resolves after a random delay between 1-3 seconds
// and returns a random number between 1-100.

const promiseOne = new Promise((resolve,reject)=>{
    const delay = Math.floor(Math.random()*2000) + 1000;
    setTimeout(()=>{
        const randomnumber = Math.floor(Math.random()*100) + 1;
        resolve(randomnumber)
    },delay)
})
promiseOne.then((number)=>{
    // console.log(`Got the random number ${number}`)
}).catch((error)=>{
    // console.log(`something went wrong.`)
})


// humne isme resolve ke andr value pass nhi kri thi ye yaad rkhna hai.

// ============================================================================
// Exercise 2: Promise with Rejection
// ============================================================================
// Task: Create a promise that simulates a password check. If the password is
// "secretpassword", resolve with "Access granted", otherwise reject with
// "Access denied".
function promiseTwo(password)
{return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if (password === "secretpassword") {
            resolve("Access granted.")
        } else {
            reject("access denied.")
        }
    },1000)
})}
promiseTwo("secretpassword").then((message)=>{
    console.log(`success fully unlocked ${message}`);   
}).catch((error)=>{
    console.log(`Error: ${error}`);
})

promiseTwo("wrong").then((message)=>{
    // console.log(`success fully unlocked ${message}`);   
}).catch((error)=>{
    // console.log(`Error: ${error}`);
})




// const promiseTwo = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if (password === "secretpassword") {
//             resolve("Access granted.")
//         } else {
//             reject("access denied.")
//         }
//     },1000)
// })
// promiseTwo("secretpassword").then((message)=>{
//     console.log(`success fully unlocked ${message}`);   
// }).catch((error)=>{
//     console.log(`Error: ${error}`);
// })

// promiseTwo("wrong").then((message)=>{
//     // console.log(`success fully unlocked ${message}`);   
// }).catch((error)=>{
//     // console.log(`Error: ${error}`);
// })


// the main issue to this code is we are making promise as the object
// not as the function and we are calling it like a function so this is 
// the biggest issue.

// and at the end we are calling as the function while they are object with the 
// property of the then and the catch.


// ============================================================================
// Exercise 3: Promise Chaining
// ============================================================================
// Task: Create a series of promises that simulate processing a user:
// 1. First promise fetches a user by ID (simulated)
// 2. Second promise gets their order history based on the user object
// 3. Third promise calculates their total spending

