function guessSecretNumber() {
  // Generate a random secret number between 1 and 10
  let secretNumber = Math.floor(Math.random() * 10) + 1;

  // Initialize attempts counter
  let attempts = 0;

  // Welcome message
  console.log("Welcome to the Guess the Secret Number game!");

  // Guessing loop
  do {
    // Get user guess
    let guessedNumber = parseInt(prompt("Enter your guess (between 1 and 10): "));

    // Increment attempts counter
    attempts++;

    // Check guess
    if (guessedNumber < secretNumber) {
      console.log("Too low! Try again.");
    } else if (guessedNumber > secretNumber) {
      console.log("Too high! Try again.");
    } else {
      console.log("Congratulations! You guessed the correct number:", secretNumber);
      console.log("It took you", attempts, "attempts.");
      break; // Exit loop if guess is correct
    }
  } while (true); // Loop continues until guess is correct
}

guessSecretNumber();
