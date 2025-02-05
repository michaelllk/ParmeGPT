const messages = [
    "How can I help?",
    "Do you have a question?",
    "Ask ke anything!",
    "What's on your mind?",
    "I'm here to help!"
];

function showRandomMessage() {
    const inputPlaceholder = document.getElementById("user-input");
    const randomIndex = Math.floor(Math.random() * messages.length);
    inputPlaceholder.placeholder = messages[randomIndex];
}

// Change placeholder message on page load
window.onload = showRandomMessage;
