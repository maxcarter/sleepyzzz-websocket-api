const log = require('winston');
var ctrls = require('../controllers');

module.exports = (socket) => {
    log.info('Initializing Event [battery]');

    socket.on('battery', (data) => {
        log.info('Event [battery]');
        log.info(data);

        if (!data || (Object.keys(data).length === 0 && data.constructor === Object)) {
            log.error('Event payload is empty');
            return;
        }

        if (!('device' in data) || !('percentage' in data)) {
            log.error('Missing required event payload');
            return;
        }

        let obj = {
            percentage: data.percentage,
            timestamp: Date.now()
        };

        let collection = 'battery/' + data.device;
        
        ctrls.database.insert(collection, obj).catch((error) => {
            log.error('Could not save battery percentage');
        });
    });
};
