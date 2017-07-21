const log = require('winston');
var ctrls = require('../controllers');

module.exports = (socket) => {
    log.info('Initializing Event [battery]');

    socket.on('battery', (data) => {
        log.info('Event [battery]');
        log.info(data);
    });
};
