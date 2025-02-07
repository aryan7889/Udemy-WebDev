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
class BankAccount {
    #balance;  // Private variable

    constructor(balance) {
        this.#balance = balance;
    }

    #validateTransaction(amount) {  // Private method
        return amount > 0;
    }

    withdraw(amount) {
        if (this.#validateTransaction(amount) && this.#balance >= amount) {
            this.#balance -= amount;
            console.log(`Withdrawn: $${amount}`);
        } else {
            console.log("Invalid transaction or insufficient funds!");
        }
    }

    deposit(amount) {
        if (this.#validateTransaction(amount)) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}`);
        } else {
            console.log("Invalid deposit amount!");
        }
    }

    getBalance() {
        return `Your balance is $${this.#balance}`;
    }
}

const account = new BankAccount(1000);
// console.log(account.getBalance()); // User only sees output
// account.withdraw(500);
// console.log(account.getBalance());

// 
// 🔥 Key Benefits of Polymorphism
// 1️⃣ Code Reusability → Same method names for different behaviors.
// 2️⃣ Flexibility → Methods can be extended or overridden as needed.
// 3️⃣ Simplifies Code → No need for complex if-else checks for object types.
// 4️⃣ Enhances Maintainability → Changes in one class don’t affect others.

// 🚀 Final Thoughts
// Polymorphism allows JavaScript objects to be treated as the same type, even if they behave differently.
// It is commonly used in:
// OOP Design (Inheritance, Method Overriding).
// Function Arguments (Accepting different object types).
// Frameworks & Libraries (e.g., React components use polymorphism).
// Would you like to practice a real-world example using polymorphism? 🚀


// 🎯 Scenario
// Imagine a messaging system where:

// Email notifications send an email.
// SMS notifications send a text message.
// Push notifications send an in-app notification.
// Even though all three "send a notification," they do it differently.
// Using polymorphism, we can create a common interface (send()) but let each notification type handle it in its own way.

class Notification {
    send() {
        return "Sending a generic notification...";
    }
}
class EmailNotification extends Notification {
    send() {
        return "📧 Sending an Email Notification...";
    }
}

class SMSNotification extends Notification {
    send() {
        return "📩 Sending an SMS Notification...";
    }
}

class PushNotification extends Notification {
    send() {
        return "🔔 Sending a Push Notification...";
    }
}

function sendNotification(notification) {
    console.log(notification.send()); // Calls the correct method automatically
}

// Create different notifications
const email = new EmailNotification();
const sms = new SMSNotification();
const push = new PushNotification();

// Send notifications using polymorphism
sendNotification(email); // Output: 📧 Sending an Email Notification...
sendNotification(sms);   // Output: 📩 Sending an SMS Notification...
sendNotification(push);  // Output: 🔔 Sending a Push Notification...


// 🔥 Why is This Useful?
// No Need for if-else Statements → Clean & scalable code.
// Easy to Extend → Just add new classes (e.g., WhatsAppNotification) without modifying existing code.
// Increased Reusability → The same function (sendNotification()) works for all types.



// we have learnt about the oops programming and now from tomorrow we would be 
// heading towards the dom and bom manipulation in java script.