let car = {
    make: "toyota",
    model: "frotuner",
    year: "2020",
    start: function(){
        return `This company ${this.make} makes a good ${this.model} this ${this.year}`
    }
}
// console.log(car.start());

function Person(name,age){
    this.name = name
    this.age = age
}
let John = new Person("John Doe", 20)
// console.log(John.name);


function Animal(type) {
    this.type = type
}
// Example of the protoype chain has been showcased.
Animal.prototype.speak = function () {
    return `${this.type} makes a dirty sound`
}
let sound = new Animal("Monkey")
// console.log(sound.speak());

// array prototype chain : 
Array.prototype.custom = function(){
    return `custom method to form an arrray ${this}`
}
let MyArray = [1,2,3];
// console.log(MyArray.custom());


let MyNewArray = [1,2,3,4,5];
// console.log(MyNewArray.custom());

// class intro:

class Vechicle {
    constructor(make, model){
        this.make = make
        this.model = model
    }
start (){
    return `${this.make} is a car from ${this.model}`
}
}
class Car extends Vechicle {
    drive(){
        return `${this.make} This is an exapmle of inheritance`
    }
}
let myCar = new Car("Toyota", "fortuner")
// console.log(myCar.start());
// console.log(myCar.drive());

let VechicleOne = new Vechicle("Hia", "Fortuner")
// console.log(VechicleOne.make);

// example of class and some pratise.
class Parent {
    constructor(name){
        this.name = name;
    }
    sayHello (){
       return `Hello from this ${this.name}`;
        
    }
}
let parent = new Parent("side")
// console.log(parent.sayHello());

class Child extends Parent {
    constructor (name,age){
        super(name)
        // calls the parent constructor
        this.age = age
    }

introduce(){
    return (`I am ${this.name} ad ${this.age}`);
    
}
}

let child = new Child("Ali", 52)
// console.log(child.introduce());








// some few more examples:
// get and set property in class:


class Rectangle {
    constructor (width, height){
        this.width = width;
        this.height = height
    }
get area(){
    return this.width*this.height
}
set dimensions({width, height}){
    this.width = width;
    this.height = height;
}
}
let newRectangle = new Rectangle(5, 10)
// console.log(newRectangle.area);

newRectangle.dimensions = {width: 6, height: 12}
// method to chnage the dimension
// console.log(newRectangle.area);

/*


1. Create a Bank Account System
Problem Statement:
Design a BankAccount class with the following features:

=>A constructor that takes accountHolder and initialBalance as arguments.
=>A method deposit(amount) to add money to the account.
=>A method withdraw(amount) to remove money if sufficient funds are available.
=>A method getBalance() to return the current balance.

*/

class BankAccount{
    constructor(accountHolder , initialBalance){
        this.accountHolder = accountHolder;
        this.initialBalance = initialBalance;
    }
deposit (amount){
    this.initialBalance += amount;
    console.log(`${amount} deposited. New Balance ${this.initialBalance}`);
    
}
withdraw(amount){
   if (amount > this.initialBalance) {
     console.log(
     "insufficient funds");
   } else {
    this.initialBalance -= amount;
      console.log(
      `${amount} withdrawn. Remaining amount is ${this.initialBalance}`);
   }
}
getbalance(){
    return this.initialBalance;
}
}

let account = new BankAccount("aryan", 25000)
// account.deposit(34000)
// account.withdraw(10000)
// console.log(account.getbalance());


/*
Design a Shopping Cart
Problem Statement:
Create a ShoppingCart class with the following features:

A constructor that initializes an empty items array.
A method addItem(itemName, quantity, price) to add an item.
A method removeItem(itemName) to remove an item.
A method getTotalCost() to calculate the total cost of the cart.
Solution:
*/


class ShoppingCart{
    constructor(){
        this.items = [];
    }

addItem(itemName, quantity, price){
    
}    
}



















