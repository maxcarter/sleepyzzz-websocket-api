const socketio = require('socket.io');
const log = require('winston');
var config = require('../config.js');

module.exports = (app, server) => {
    var io = socketio(server);

    io.on('connection', (socket) => {
        log.info(`New connection: [${socket.id}]`);

        socket.on('disconnect', () => {
            log.info(`Client [${socket.id}] has disconnected`);
        });
    });
};
