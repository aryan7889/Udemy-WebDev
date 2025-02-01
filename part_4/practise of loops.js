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
}
guessNumber()
