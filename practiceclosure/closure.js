function counter(){
    let count = 0;
    return function (){
        count ++;
        return count;
    }
}
const counternumber  = counter()
// console.log(counternumber())
// console.log(counternumber());


function createaccount(initialbalance){
    let balance = initialbalance;
     
    return{
    deposit: (amount)=>{
        balance += amount
    },
    withdraw: (amount)=>{
        if (amount<=balance) {
        balance-=amount
        }else {
            console.log(`issuficient balance.`);
        }
    },
    getBalance: function(){
        return balance;
    }
};
}
// const account = createaccount(1000)
// account.deposit(100)
// account.withdraw(200)
// console.log(account.getBalance());


// method 2 
function createaccount(initialbalance){
    let balance = initialbalance;

    function deposit(amount){
        balance +=amount;
    }
    function withdraw(amount){
        if (amount<=balance) {
            balance-=amount;
        }else{
            console.log("issuficient balance.");
        }
    }
    function getbalance(){
        return balance;
    }
return {deposit, withdraw , getbalance }
}

// method 3:

function createaccount(initialbalance){
    let balance = initialbalance;
    return {
    deposit(amount) {
            balance+=amount
        },
        withdraw(amount){
            if (amount<=balance) {
                balance-=amount;
            }else{
                console.log("insufficient balance.");
            }
        },
        getbalance(){
            return balance;
        }
    }
}

// method 4  
function createaccount(initialbalance){
    let balance = initialbalance;                  //so we can make functions then make them return at the end of the code file.
    function deposit(amount){
        balance += amount;
    }
    function withdraw(amount){
        if (amount<=balance) {
            balance-=amount;
        }else{
            console.log("insufficient balance.");            
        }
    }
    function getBalance(){
        return balance;
    }
    return{
        deposit: deposit,
        withdraw: withdraw,
        getBalance: getBalance
    }
}
// const account = createaccount(1000)
// account.deposit(100)
// account.withdraw(200)
// console.log(account.getBalance());

/*This is also the correct method to return the function in the form of the object 
as if we can write the whole code first then at the end with help of the object can return the things in the on go.
*/

// exercise 3 :
// Exercise 3: Private Variables
// Problem: Create a function that returns an object with methods to get and set a private variable.


function createname(name){
    let privatename = name;
    return {
        getname: function (){
            return privatename
        },
        setname: function (newName){
        privatename = newName;
        }
    }
}
// const person = createname("Alice")
// console.log(person.getname());
// person.setname("bob")
// console.log(person.getname());
// console.log(person.privatename);



// Exercise 5: Cache Function
// Problem: Create a function that caches the results 
// of expensive operations.

function createcache(){
    let cache = {};
    return {
        set: function(key,value){
            cache[key] = value;
        },
        get: function(key){}
    }
}















