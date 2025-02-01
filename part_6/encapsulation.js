class BankBalance {
    #balance = 0;

    deposit(amount){
        this.#balance += amount
        return this.#balance
    }

    getbalance(){
        return `$ ${this.#balance}`
    }
}
let account = new BankBalance()
// console.log(account.getbalance);

// abstraction:

class CoffeeMachine{

    start(){
        return `Starting the machine...`;
    }
    brewcoffee (){
        return `brewing the coffee ....`;
    }
    pressStartButton (){
        let msgone = this.start();
        let msgtwo = this.brewcoffee();
        return `${msgone} + ${msgtwo}`
    }
}

let mymachine = new CoffeeMachine();
// console.log(mymachine.start());
// console.log(mymachine.brewcoffee());
// console.log(mymachine.pressStartButton());


// polymorphism 
class Bird{
    fly(){
        return `Flying...`
    }
}

class Penguin extends Bird {
    fly(){
        return `Penguin can t fly.`
    }
}
let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.penguin());

// static method:
class Calculator{
    static add(a, b){
        return a+b
    }
}
// let minicalc = new Calculator()
// console.log(minicalc.add(2,3));
// console.log(Calculator.add(2,3));

// getter and setters:
class Employee {
    constructor(name, salary){
        this.name = name;
        this._salary = salary;
    }
    get salary(){
        return `you are not allowed to see this salary.`
    }
    set salary(value){
        if (value<0) {
        console.error("salary is invalid");
        } else {
            this._salary = value;
        }
    }
}
let emp = new Employee("alice",-5000);
console.log(emp.salary);












