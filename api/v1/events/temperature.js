const log = require('winston');
var ctrls = require('../controllers');

module.exports = (socket) => {
    log.info('Initializing Event [temperature]');

    socket.on('temperature', (data) => {
        log.info('Event [temperature]');
        log.info(data);
    });
};
