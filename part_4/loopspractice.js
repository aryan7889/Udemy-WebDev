// Print Multiples of 5

for (let i = 0; i <= 50; i += 5) {
    
    // console.log(i);
    
}

// Challenge 2: Sum of First 10 Natural Numbers
// 🔹 Task: Use a while loop to find the sum of numbers from 1 to 10.
// 💡 Hint: Keep adding i to sum until i reaches 10.

let sum = 0;
let i = 1;
while (i<=10) {
    sum += i;
    i++;
}
// console.log(sum);

// notes and ask chat what could be wrong if i could do this.

// 📝 Challenge 3: Guess the Number Game
// 🔹 Task: Use a do...while loop to keep asking the user to guess a number until they guess 7.
// 💡 Hint: Use prompt() to take user input (for browsers).

// let guessTheNumber;
// do {
//     guessTheNumber = parseInt(prompt("guess the number between 1 to 10"));
// } while (guessTheNumber !== 7);
// console.log("you got the right answer");


// 📝 Challenge 4: Reverse an Array using for...of
// 🔹 Task: Print all elements of an array in reverse order using a for loop.
// 💡 Hint: Start the loop from the last index and move to the first.
let arr = [10,20,30,40,50]    
let store = []

for (i = arr.length - 1;i>=0;i--) {
    store.push(arr[i])   
}    
// console.log(store);




// 📝 Challenge 5: Count Vowels in a String
// 🔹 Task: Use a for...of loop to count the number of vowels (a, e, i, o, u) in a given string.
// 💡 Hint: Convert the string to lowercase and check each character.


let str = "javascript is awesome!";
let vowels = "aeiou";
let count = 0;
for (const character of str) {
    if (vowels.includes(character)){
        count ++;
    }
}
// console.log(count);

// // 📝 Challenge 6: Extract Object Keys and Values
// 🔹 Task: Use a for...in loop to print all keys and values of an object.
// 💡 Hint: Use object[key] to access values.

let student = { name: "Amit", age: 21, grade: "A" };

for (let key in student) {
    // console.log(`${key}:${student[key]}`);
}

// 📝 Challenge 7: FizzBuzz Challenge
for (let i = 0; i <=20; i++) {
    if (i%3===0 && i%5===0) {
        console.log("fizzbuzz");
    } else if (i%3 ===0) {
        console.log("fizz");
    } else if (i%5===0) {
        console.log("buzz");
    } else {
        console.log(i);

    }
}
