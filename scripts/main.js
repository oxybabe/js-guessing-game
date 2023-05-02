(function() {
    "use strict";
// Define a function to generate a random number between 1 and 100
    function generateRandomNumber() {
       return Math.floor(Math.random() * 10) + 1;
    }

    // Define a function to check if the user's guess is correct
    function checkGuess(guess) {
        if(guess === randomNumber) {
            return true;
        }

        return false;

    }
    //Define a function (closure) to keep track of the number of attempts
    function incrementAttempts() {
        let numAttempts = 0;
        return function () {
            return ++numAttempts;
        };   
     }
     //Define a function to handle the user's guess
     function handleGuess() {
        const userGuess = parseInt(prompt("Guess a number between 1 and 10"));
        const numberOfGuesses = countAttempts();

        if(checkGuess(userGuess)) {
            alert(`Yay! You guessed teh number in ${numberofGuesses} tries. The number is ${randomNumber}`);
        } else {
            alert(`Nope! Trye again!`);
            handleGuess();
        }
     }

     // Generate a random number and execute function to track number of function
     const randomNumber = generateRandomNumber();
     const countAttempts = incrementAttempts();

     // Add an even listener to the button that calls the guess handler function when clicked
     document.querySelector("button");
}) ();
