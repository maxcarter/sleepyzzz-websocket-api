const log = require('winston');
var ctrls = require('../controllers');

module.exports = (socket) => {
    log.info('Initializing Event [heartrate]');
    var collection = 'heartrate';

    socket.on('heartrate', (data) => {
        log.info('Event [heartrate]');
        log.info(data);

        ctrls.database.insert(collection, data);

        // TODO: Data Validation
        // TODO: Perform anomaly analysis
        // TODO: Save to database
    });
};
