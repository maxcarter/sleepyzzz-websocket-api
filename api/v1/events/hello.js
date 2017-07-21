const log = require('winston');
var ctrls = require('../controllers');

module.exports = (socket) => {
    log.info('Initializing Event [hello]');

    socket.on('hello', (data) => {
        log.info('Event [hello]');
        log.info(data);
        ctrls.hello.world(function(error, result) {
            if (error) {
              log.error('Oops something went wrong');
                return;
            }
            log.info(result);
        });
    });
};
