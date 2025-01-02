// problem 1

let teas = ["green tea", "black tea", "chai", "oolong tea "];
let selectedteas = [];
for (let i = 0; i < teas.length; i++) {
    if (teas[i] == "chai") {
    break;
    }
    selectedteas.push(teas[i])

    
}
// console.log(selectedteas);

// problem 2 
let cities = ["london", "new york", "paris", "berlin"];
let visitedcities = [];
for (let i = 0; i < cities.length; i++) {
    if (cities[i] === "paris" || cities[i] === "Paris") {
        continue;
    }
    visitedcities.push(cities[i])
    
}
// console.log(visitedcities);


// problem 3 
let numbers = [1,2,3,4,5];
let smallnumber = [];
for (const num of numbers ) {
    if (num === 4) {
        break;
    }
    smallnumber.push(num)

}
// console.log(smallnumber);

// problem 4 
let teas1 = ["green tea", "chai", "herbal tea", "black tea"];
let preferredtea = [];
for (const tea2 of teas1) {if (tea2 === "herbal tea") {
continue;    
}
    preferredtea.push(tea2)
}
// console.log(preferredtea);


// problem 5 
/*
problem 6
Now use a for in loop to
loop through the objects containing city populations.
Skip any city which has a population below 3 million,
store the rest in the new object large city.
let worldcities = {
    "sydney" : 5000000,
    "tokyo": 9000000,
    "berlin":3500000,
    "paris":2200000,
}*/
let worldcities = {
    "sydney" : 5000000,
    "tokyo": 9000000,
    "berlin":3500000,
    "paris":2200000,
}
let largecities = {}
for (const city in worldcities) {
    if (worldcities[city]< 3000000) {
        continue;
    }
     largecities[city] = worldcities[city] 
    
}
// console.log(largecities);


// problem 7
/*
Write a `forEach loop that iterates through the array 
stop the loop when `"chai"` is found and store all 
previous tea types in an array named `availableTeas`.
*/

let teacollection = ["early grey", "green tea", "chai",
    "oolong tea"]
let availableTeas = []
teacollection.forEach(function (tea) {
    if (tea === "chai") {
        return;
    }
   availableTeas.push(tea)
});
// console.log(availableTeas);


// problem 8 
let myWorldCities = ["berlin", "tokyo", "sydney", "paris"]
let traveledCities = []

myWorldCities.forEach(city => {
    if (city === 'sydney') {
        return
    }
    traveledCities.push(city)
});
// console.log(traveledCities);


// problem 9
let myNumbers = [2, 5, 7, 9]
let doubledNumbers = []
for (let i = 0; i < myNumbers.length; i++) {
    if (myNumbers[i] === 7 ) {
        continue
    }
    doubledNumbers.push(myNumbers[i]* 2)
}

// console.log(doubledNumbers);


// problem 10
let newtea = ["chai", "greem tea", "black tea", "jasmine tea",
    "hermal tea"]
let shorttea = []
for (const tea of newtea) {
    if (tea.length>10) {
       break; 
    }
    shorttea.push(tea)
    
}    
// console.log(shorttea);
