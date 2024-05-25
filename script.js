document.addEventListener('DOMContentLoaded', () => {
    const messageForm = document.getElementById('messageForm');
    const messagesDiv = document.getElementById('messages');

    messageForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const usernameInput = document.getElementById('username');
        const messageInput = document.getElementById('messageInput');

        if (usernameInput.value.trim() && messageInput.value.trim()) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');

            const usernameElement = document.createElement('span');
            usernameElement.classList.add('username');
            usernameElement.textContent = usernameInput.value.trim();

            const textElement = document.createElement('span');
            textElement.classList.add('text');
            textElement.textContent = messageInput.value.trim();

            messageElement.appendChild(usernameElement);
            messageElement.appendChild(textElement);
            messagesDiv.appendChild(messageElement);

            messageInput.value = '';
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }
    });
});
