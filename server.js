const io = require('socket.io')();

io.on('connection', (client) => {
  client.on('new message', (msg) => {
    io.emit('new message', msg);
  });
});

const port = 8000;
io.listen(port);
