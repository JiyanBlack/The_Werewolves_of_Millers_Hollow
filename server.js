const express = require('express');
const app = express();
const http = require('http');
const httpServer = http.Server(app);
const io = require('socket.io')(httpServer);
const ioEvents = require('./server/ioEvents');

io.engine.ws = new (require('uws').Server)({
  noServer: true,
  perMessageDeflate: false,
});
app.use(express.static('wmh'));

io.on('connection', (socket) => {
  console.log('a user connected.');
  ioEvents(socket);
});

httpServer.listen(3000, () => { console.log('Server listens at 3000...'); });
