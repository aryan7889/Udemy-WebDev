function calculate(a,b){
    return a+b;
}
const add = calculate(4,5)
// console.log(add);

function array(name, age){
    return {
        name: name,
        age: age,
        greet: function(){
            console.log(`Hi I am ${name}`);
        }
    }
    
}
const user = array("john",20)
// console.log(user.name)
// console.log(user.age)

function counter(){
    let count = 0;
    return function(){
        count++;
        return count
    }
}
const counter1 = counter()
// console.log(counter1());
// console.log(counter1());

// to create a function where we can return the message adult or minnor after 
// checking the age of the person.

function checkage(age){
    if (age>=18) {
        return "Adult";
    } else {
        return "Minor"
    }
}
const checkage1 = checkage(20)
// console.log(checkage1);


// action an then the side effect:
function deposit(amount){
    balance += amount;
    // console.log(`deposited ${balance}.`)
}
// deposit(100);

function createbankaccount(initialamount){
    let balance = initialamount;
    {
        function deposit(amount){
            balance += amount;
            console.log(`deposited the amount ${amount}`)
        }
    }
}