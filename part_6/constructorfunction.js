function car(make, model) {
    this.make = make
    this.model = model
}

function mynewcar(company, model){
    this.company = company
    this.model = model
}

let CAR1 = new car("Hyundai", "Creta")
// console.log(CAR1);

let CAR2 = new mynewcar("Toyata", "fortuner")
let CAR3 = new car("Tata", "Safari")
// console.log(CAR2);
// console.log(CAR3);

// new function is describe into consrtuctor function 

function Tea(type){
    this.type = type
    this.Named = function(){
        return `this is a cup of ${this.type}`
    }
}
let lemonTea = new Tea("lemon tea")
// console.log(lemonTea.Named());


// protype plus constructor function
function Animal(Species){
    this.Species = Species
}
Animal.prototype.sound = function(){
    return `${this.Species} makes a sound.`
}
let Dog = new Animal("Dog")
// console.log(Dog.sound());


function Drink(name){
    if (!new.target) {
throw new Error ("Drink must be called by new")       
    }
    this.name = name
}
let lemonta = new Drink("lemon tea")
let coffee = new Drink("coffee")
// console.log(lemonta);
// console.log(coffee);







// Go in more depth and revise and practise.

