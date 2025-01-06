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
console.log(MyNewArray.custom());
