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
    this.items.push({itemName, quantity, price});
    console.log(`${quantity}x ${itemName} added to the cart`);
}    
removeItem(itemName){
    this.items = this.items.filter(item => item.itemName !== itemName);
    console.log(`${itemName} removed from the cart`);
    
}
getTotalCost(){
    return this.items.reduce((total,item) => total + item.quantity * item.price, 0);

}
}
let cart = new ShoppingCart();
// cart.addItem("Apple", 3, 10);
// cart.addItem("Banana", 5, 5);
// cart.removeItem("Apple")
// console.log(`Total cost: ${cart.getTotalCost()}`);


/*1. Create a Bank Account System
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

/* Create a Library Management System
Problem Statement:
Create a Library class with the following features:

A constructor to initialize books (an empty array).
A method addBook(title, author) to add a book.
A method borrowBook(title) to borrow a book (remove it from the list).
A method returnBook(title, author) to return a borrowed book.

*/

class Library{
    constructor(){
        this.books = [];
    }
    addBook(title, author){
        this.books.push({title, author});
        console.log(`${title} by ${author} added to library.`);
        
    }
    borrowBook(title){
        let bookIndex = this.books.findIndex(book => book.title === title);
        if (bookIndex = -1) {
            console.log(`bbok not available in the library.`);
                       
        } else {
            const book = this.books.splice(bookIndex,1)[0];
            console.log(`you borrowed ${book.title}`);
            
        }

    }
returnbook (title, author){
    this.books.push({title, author});
    console.log(`${title} by ${author} returned to the library.`);
    
}}