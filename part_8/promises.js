/*
Promises:
the promise object represent the eventual completion of an asynchronous 
operation and it resulting value.

Ex..Jaruri nhi hai sare kaam abhi ho , bhut sare kaam hai jo utne fat
hote hai jis speed mei programming execute hoti hai.


A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.


A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.



https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png



Here are the example of the five types of the promises. which will help to understand 
the syntax.
*/


const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task is complete.');
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("promose is completed.")
})

const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
})
promiseTwo.then(function(){
    console.log("Async 2 resolve.")
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "hitesh", email: "abc @gmial.com"
        })
    },1000)})
promiseThree.then(function(user){
    console.log(user)
})


const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username : "abcd", email : "abc@gmail.com"})
        }else{
            reject ('erroe: something went wrong.')
        }
    },1000)
})
promisefour.then(function(user){
    console.log(user);
    return user.username
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log('error is now reseloved or rejected.')
)


// while there is error we have to take the use of the catch and the finally to 
// handle the error.


const promiseFive = new promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username : "abcd", email : "abc@gmail.com"})
        }else{
            reject ('erroe: something went wrong.')
        }
    },1000)
    })
async function consumePromiseFive() {
    try {
    const response = await promiseFive
    console.log(response);}
    catch (error) {
    console.log(error);
  }
}
consumePromiseFive()

/*
Why Promises Were Created
JavaScript is single-threaded, but needs to handle operations like:

Network requests (APIs)

File I/O (in Node.js)

Timers and delays

Database operations

Before promises, we used callback functions, which led to "callback hell" - nested, hard-to-read code.

Key Benefits of Promises
Better Asynchronous Code Management:

Avoid "pyramid of doom" (deeply nested callbacks)

Write flatter, more readable code

Improved Error Handling:

Single .catch() for all errors in the chain

Better than error-first callbacks

Chaining Capability:

Sequence async operations cleanly

Pass data between steps easily
*/


// async function getAllUsers(){
//     try {
//         const response = await fetch('')
//         const data = await response.json()
//         console.log(data);    
//     } catch (error) {
//         console.log("E:", error);
        
//     }
// }


// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error)
})


