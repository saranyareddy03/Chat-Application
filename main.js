document.addEventListener('DOMContentLoaded', (event) => {
    const socket = io();

    const clientsTotal = document.getElementById('client-total');
    const messageContainer = document.getElementById('message-container');
    const nameInput = document.getElementById('name-input');
    const messageForm = document.getElementById('message-form');
    const messageInput = document.getElementById('message-input');

    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        sendMessage();
    });

    socket.on('clients-total', (data) => {
        if (clientsTotal) {
            clientsTotal.innerText = `Total Clients: ${data}`;
        } else {
            console.error('clientsTotal element not found');
        }
    });

    function sendMessage() {
        if (messageInput && nameInput) {
            if (messageInput.value === '') return;
            const data = {
                name: nameInput.value,
                message: messageInput.value,
                dateTime: new Date()
            };
            socket.emit('message', data);
            addMessageToUI(true, data);
            messageInput.value = '';
        } else {
            console.error('messageInput or nameInput element not found');
        }
    }

    socket.on('chat-message', (data) => {
        addMessageToUI(false, data);
    });

    function addMessageToUI(isOwnMessage, data) {
        clearFeedback();
        const element = `
            <li class="${isOwnMessage ? "message-right" : "message-left"}">
                <p class="message">
                    ${data.message}
                    <span>${data.name} • ${moment(data.dateTime).fromNow()}</span>
                </p>
            </li>`;
        if (messageContainer) {
            messageContainer.innerHTML += element;
            scrollToBottom();
        } else {
            console.error('messageContainer element not found');
        }
    }

    function scrollToBottom() {
        if (messageContainer) {
            messageContainer.scrollTo(0, messageContainer.scrollHeight);
        } else {
            console.error('messageContainer element not found');
        }
    }

    messageInput.addEventListener('focus', (e) => {
        socket.emit('feedback', {
            feedback: ` ${nameInput.value} is typing a message`
        });
    });

    messageInput.addEventListener('keypress', (e) => {
        socket.emit('feedback', {
            feedback: ` ${nameInput.value} is typing a message`
        });
    });

    messageInput.addEventListener('blur', (e) => {
        socket.emit('feedback', {
            feedback: ''
        });
    });

    socket.on('feedback', (data) => {
        clearFeedback();
        const element = `
            <li class="message-feedback">
                <p class="feedback" id="feedback">${data.feedback}</p>
            </li>`;
        if (messageContainer) {
            messageContainer.innerHTML += element;
        } else {
            console.error('messageContainer element not found');
        }
    });

    function clearFeedback() {
        document.querySelectorAll('li.message-feedback').forEach(element => {
            element.parentNode.removeChild(element);
        });
    }
});
