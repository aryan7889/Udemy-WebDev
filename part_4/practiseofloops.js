/*/
3. Number Guessing Game
Problem:
Write a program that generates a random number between 1 and 10. The user must input their guess, and the program should print:

"Too High" if the guess is greater than the number.
"Too Low" if the guess is smaller.
"Correct! You win!" if the guess is right.
Bonus Challenge:
Allow the user to try 3 times before revealing the answer.

*/
// Solutions to the problem.



// some new topics are being introduced in the problem so try to remember
// and apply on the furtur basis.

function guessNumber(){
    let randomNumber = Math.floor(Math.random()* 10 + 1)
    let attempt = 3

    while (attempt > 0) {
        let userguess = parseInt(prompt("Guess a number between 1 to 10"));

        if (userguess === randomNumber) {
            console.log(`Use guessed the right number`);
            return;}
            else 
            if (userguess > randomNumber) {
                console.log("so close but high");}
            else 
                console.log("low value");}
attempt--;
}
// guessNumber()

/*
notes of the above solution has to be wtiiten.
*/

/*
4. ATM Withdrawal System
Problem:
Write a program that simulates an ATM. It should:

Ask the user for their PIN (assume the correct PIN is "1234").
If the PIN is correct, ask how much money they want to withdraw.
If they have sufficient balance (assume ₹5000), allow withdrawal.
Otherwise, show "Insufficient funds!".
If they enter the wrong PIN 3 times, lock the account.
*/

function atmpin(){
    const correctpin = "1234"
    let balance = 5000;
    let attempt = 3;

    while (attempt>0) {
        let pin = prompt("Enter the pin")
        if (pin === correctpin) {
            let amount = parseInt(prompt(`Enter the amount to withdraw.`))
            if (amount<=balance) {
                balance -= amount;
                console.log(`Withdrawn succesfully Remaining balance ${balance}`);
            }else {
                console.log("Insufficient balance.");
                
            }
            return;
        }else {
            console.log("incorrect pin");
            attempt--;
        }
}
console.log("account locked");
}
// atmpin()


/*
5. Find the Greatest of Three Numbers
Problem:
Write a program that takes three numbers as input and prints the largest one.


*/

function greatestnumber (a,b,c){
if (a > b && a > c) {
    console.log("a is the largest.");
}else if (b > a && b > c) {
    console.log("b is the largest");
}else {
    console.log("c is the largest.");
}
return;
}
// greatestnumber(10,20,8)

/*
Time-Based Greeting System
Problem:
Write a program that checks the current hour of the day and displays:

"Good Morning" if time is between 5 AM and 12 PM.
"Good Afternoon" if time is between 12 PM and 5 PM.
"Good Evening" if time is between 5 PM and 9 PM.
"Good Night" otherwise.
Hint:
Use new Date().getHours() to get the current hour.

*/

function greetmessage (){
    let hour = new Date().getHours();

    if (hour>=5 && hour < 12 ) {
        console.log("Good Morning");
       }  
       else if (hour >= 12 && hour < 17) {
        console.log("good evening");
    }else{
        console.log("good night");
        
    }
}
// greetmessage();

// new notes have to prepared of the above solution and the differnet research we have done 
// with the help of ai also.


/*7. Rock, Paper, Scissors Game
Problem:
Write a simple Rock, Paper, Scissors game where the user selects one of the three options, and the computer randomly picks one. Print the winner based on these rules:

Rock beats Scissors
Scissors beats Paper
Paper beats Rock
Same choice means it's a Tie
*/
function game(usernchoice){
    let choice = ["rock", "paper", "scissors"];
    let computerchoice = choice[Math.floor(Math.random()*3)];
    console.log(`You Choose ${usernchoice} and computer choose ${computerchoice}`);
    
    if (usernchoice === computerchoice) {
        console.log("it is tie.");    
    }else if ((usernchoice === "Rock" && computerchoice === "scissors")||
            (usernchoice === "paper" && computerchoice === "rock")||
            (usernchoice === "scissors" && computerchoice === "paper")) {
        console.log("You Win"); 
    }else {
        console.log("you lose.");
        
    }
}
game("rock")

