// Select necessary elements
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const submitButton = document.getElementById("btn");
const outputDiv = document.getElementById("output");

// Function to simulate a delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Async function to handle form submission
const handleFormSubmit = async () => {
  // Clear any previous output
  outputDiv.textContent = "";

  // Retrieve user input values
  const text = textInput.value.trim();
  const delayMs = parseInt(delayInput.value, 10);

  // Validate inputs
  if (!text) {
    outputDiv.textContent = "Please enter a valid text.";
    return;
  }
  if (isNaN(delayMs) || delayMs < 0) {
    outputDiv.textContent = "Please enter a valid positive delay.";
    return;
  }

  // Display loading message
  outputDiv.textContent = "Loading...";

  // Wait for the specified delay
  

  // Clear output and display the text after the delay
  outputDiv.textContent = ""; // Ensure output is cleared before displaying final text
	await delay(delayMs);
  outputDiv.textContent = text;
};

// Attach event listener to the button
submitButton.addEventListener("click", handleFormSubmit);
