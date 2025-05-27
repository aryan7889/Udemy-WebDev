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

// exercise 3 
