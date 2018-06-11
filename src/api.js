import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8000');

function sendMessage(msg) {
  socket.emit('new message', msg);
}

function getMessage() {
  socket.on('new message', (msg) => {
    const message = document.getElementById('msg');
    const li = document.createElement('li');

    li.innerText = msg;
    message.append(li);
  });
}

export { sendMessage, getMessage };
