const log = require('winston');
var ctrls = require('../controllers');

module.exports = (socket) => {
    log.info('Initializing Event [movement]');

    socket.on('movement', (data) => {
        log.info('Event [movement]');
        log.info(data);
    });
};
