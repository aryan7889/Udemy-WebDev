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
        let msgone = this.start;
        let msgtwo = this.brewcoffee;
        return `${msgone} + ${msgtwo}`
    }
}

let mymachine = new CoffeeMachine();
console.log(mymachine.start());
console.log(mymachine.brewcoffee());
// console.log(mymachine.pressStartButton());

















