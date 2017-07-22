const log = require('winston');
var ctrls = require('../controllers');

module.exports = (socket) => {
    log.info('Initializing Event [heartrate]');

    socket.on('heartrate', (data) => {
        log.info('Event [heartrate]');
        log.info(data);

        if (!data || (Object.keys(data).length === 0 && data.constructor === Object)) {
            log.error('Event payload is empty');
            return;
        }

        if (!('device' in data) || !('bpm' in data)) {
            log.error('Missing required event payload');
            return;
        }

        ctrls.database.read('devices', data.device).then((result) => {
            let obj = {
                bpm: data.bpm,
                timestamp: Date.now()
            };
            let collection = 'heartrate/' + result.baby;
            ctrls.database.insert(collection, obj);
            // TODO: Perform anomaly analysis
        }).catch((error) => {
            log.error('Could not save heartrate data!');
        });
    });
};
