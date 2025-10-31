function checkAnswer() {
    // Step 1: Define the correct answer
    const correctAnswer = "4";

    // Step 2: Retrieve user's selected answer
    const userChoice = document.querySelector('input[name="quiz"]:checked');

    // Handle case where no option is selected
    if (!userChoice) {
        document.getElementById("feedback").textContent = "Please select an answer!";
        return;
    }

    const userAnswer = userChoice.value;

    // Step 3: Compare user’s answer with correct answer
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Step 4: Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

