const socketEvents = {
  disconnect: (socket, event) => {
    socket.on(event, (msg) => {
      console.log('user disconnected.');
    });
  },
  'create room': (socket, event) => {
    socket.on(event, (msg) => {
      console.log(msg);
    });
  },
  'being killed': (socket, event) => {
    socket.on(event, (msg) => {});
  },
  'select number': (socket, event) => {
    socket.on(event, (msg) => {});
  },
  'enter night': (socket, event) => {
    socket.on(event, (msg) => {});
  },
  'enter day': (socket, event) => {
    socket.on(event, (msg) => {});
  },

};

function ioEvents(socket) {
  Object.keys(socketEvents).forEach((event) => { socketEvents[event](socket, event); });
}

module.exports = ioEvents;