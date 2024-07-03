function printRange() {
  // Get user input for start and end of range
  let start = parseInt(prompt("Enter the starting number: "));
  let end = parseInt(prompt("Enter the ending number: "));

  // Validate input (check if numbers and start <= end)
  if (isNaN(start) || isNaN(end) || start > end) {
    alert("Invalid input. Please enter valid numbers with start less than or equal to end.");
    return; // Exit function early if input is invalid
  }

  // Loop through the numbers and print them
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
}

printRange();
