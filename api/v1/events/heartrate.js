const log = require('winston');
var ctrls = require('../controllers');

module.exports = (socket) => {
    log.info('Initializing Event [heartrate]');

    socket.on('heartrate', (data) => {
        log.info('Event [heartrate]');
        log.info(data);
    });
};
