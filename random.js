// This generates a random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;
let guess = null;
while (guess !== secretNumber) {
// This prompts the user to enter a number
  guess = prompt("Guess the secret number between 1 and 100!");
  guess = Number(guess); // Convert the string input to a number
 
  if (guess < secretNumber) {
    alert("Too low! Try again.");
  }
  else if (guess > secretNumber)
   {alert("Too high! Try again.");
  }
}
 
alert("Congratulations! You guessed the secret number.");