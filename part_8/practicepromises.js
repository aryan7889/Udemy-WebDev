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
    console.log(`Got the random number ${number}`)
}).catch((error)=>{
    console.log(`something went wrong.`)
})


// humne isme resolve ke andr value pass nhi kri thi ye yaad rkhna hai.


