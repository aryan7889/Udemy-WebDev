let sum = 0;
let i = 1;
while (i <= 5) {
sum += i    
// sum =sum + 1
i++
}

// console.log(sum);

// Problem 2

let countdown = []
let j = 5;
while (j>0) {
    countdown.push(j);
    j--
}
// console.log(countdown);

// problem 3 
let teacollection = []
let tea 
do {
    prompt(`Enter Your favourite tea (type "stop" to finish)`)
    if (tea !== "stop") {
        teacollection.push(tea)
    }
} while (tea !== "stop");



// problem 4 
let total = 0 
let k = 1
do {
    total += k
    k++
} while (k<4);


// problem 5 
let multipliednumbers = []
let numbers = [2,4,6]

for (let l = 0; l < numbers.length; l++) {
//    takeNumber = numbers[l] * 2
//    multipliednumbers.push(takeNumber)
 multipliednumbers.push(numbers[l]*2)
//  same meaning of the code.
}
// console.log(multipliednumbers);

// problem 6
let cities = ["paris","new york","tokyo","london"]
let cityList = []
for (let c = 0; c < cities.length; c++) {
    const MINE = cities[c];
    cityList.unshift(MINE)
}
console.log(cityList);







