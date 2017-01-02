const WebSocketServer = require('uws').Server;
const wss = new WebSocketServer({ port: 3000 });

function onMessage(message) {
  console.log(`received: ${message}`);
}

wss.on('connection', (ws) => {
  ws.on('message', onMessage);
  ws.send('something');
});
