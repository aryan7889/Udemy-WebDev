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
guessNumber()

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
atmpin()


/*
*/
