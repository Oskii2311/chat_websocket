import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8000');

function sendMessage(msg) {
  socket.emit('new message', msg);
}

function getMessage(callback) {
  socket.on('new message', (msg) => {
    if (!msg) {
      return false;
    }
    callback(msg);
  });
}

function removeEventListener(eventName, listener) {
  socket.removeListener(eventName, listener);
}

export { sendMessage, getMessage, removeEventListener };
