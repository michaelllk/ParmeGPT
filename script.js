// Predefined random messages
const messages = [
    "Hello! How can I assist you today?",
    "Hope you're having a great day!",
    "What would you like to talk about?",
    "Ask me anything!",
    "I'm here to chat with you."
];

// Function to display a random message
function showRandomMessage() {
    const messageBox = document.getElementById("random-message");
    const typingIndicator = document.getElementById("typing");

    // Show typing effect
    typingIndicator.style.display = "block";

    setTimeout(() => {
        // Hide typing and show message
        typingIndicator.style.display = "none";
        const randomIndex = Math.floor(Math.random() * messages.length);
        messageBox.innerText = messages[randomIndex];
    }, 2000);
}

// Load a random message on page refresh
window.onload = showRandomMessage;
