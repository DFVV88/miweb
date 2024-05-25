const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const messagesContainer = document.getElementById('messages');

// Simulate a backend server for message handling
let messages = [];

// Function to add a message to the chat
function addMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    messageElement.textContent = message;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
}

// Send message button click event
sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        addMessage('You: ' + message); // Simulate user message
        messages.push({ sender: 'You', content: message }); // Store message for future use (e.g., backend integration)
        messageInput.value = ''; // Clear input field

        // Simulate a response from the "other user"
        setTimeout(() => {
            addMessage('Bot: Hello there!');
        }, 500);
    }
});
