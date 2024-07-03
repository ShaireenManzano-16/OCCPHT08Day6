function calculateGrade() {
  // Get user input and convert to number
  let score = parseFloat(prompt("Enter your score (0-100): "));

  // Validate score (between 0 and 100)
  if (isNaN(score) || score < 0 || score > 100) {
    alert("Invalid score. Please enter a number between 0 and 100.");
    return; // Exit function early if score is invalid
  }

  // Determine letter grade based on score
  let grade;
  if (score >= 90) {
    grade = 'A';
  } else if (score >= 80) {
    grade = 'B';
  } else if (score >= 70) {
    grade = 'C';
  } else if (score >= 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }

  // Display grade result
  console.log("Your grade is:", grade);
}

calculateGrade();
