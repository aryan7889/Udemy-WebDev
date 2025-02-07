// 1. Data Protection (Restricting Direct Access)
// Encapsulation hides the internal implementation details of an object, preventing direct access to its properties.
// This prevents accidental modification of important data.


class Userdetails {
    #password;
    constructor (name, password){
        this.name = name;
        this.#password = password;
    }

    getPassword (){
        return ` ${this.#password}`;
    }
}
let pwd = new Userdetails("Aryan", "abc")
// console.log(pwd.getPassword());


// 2. Modularity & Code Organization
// Encapsulation allows objects to manage their own state without external interference.
// This makes it easier to modify or extend code without breaking the entire system.

class BankBalance{
    #balance;
    constructor (initialbalance){
        this.#balance = initialbalance;
    }
    deposit (amount){
        if (amount > 0) {
            this.#balance += amount;
        }
    }
    withdraw (amount){
        if (amount<=this.#balance) {
             console.log(`$ ${this.#balance - amount} this much amount is left.
            and the amount deducted is ${amount}.`);
        }else{
            console.log("invalid amount");
        }
    }
    getbalance (){
        return `$ ${this.#balance} is availale now`
    }
}
let add = new BankBalance(1000)
// add.deposit(500)
// add.withdraw(700)
// console.log(add.getbalance());


// 3. Prevention of Unauthorized Changes
// Without encapsulation, any part of the code can modify object properties.
// Encapsulation enforces controlled access, reducing unintended modifications.

class Person {
    #age;
    constructor(name, age){
        this.name = name;
        this.#age = age;
    }
    setage (newage){
        if (newage>0) {
            this.#age = newage;            
        }else {
            return "invalid age"
        }
    }
    getage(){
        return this.#age
    }
}
let perso1 = new Person("bob", 25)
// perso1.getage(6)
// console.log(perso1.getage());



// 
// 
// ::::::::::::::::ABSTRACTION IN JS::::::::::::::;
//
// 
// 💡 What is Abstraction in JavaScript?
// Abstraction hides the complex logic of a system and provides a simple interface.
// It allows users to interact with a system without knowing how it works internally.
// It is commonly used in APIs, libraries, and classes where users just 
// call methods without worrying about the underlying logic.

