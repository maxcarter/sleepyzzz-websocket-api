const log = require('winston');
var ctrls = require('../controllers');

module.exports = (socket) => {
    log.info('Initializing Event [movement]');

    socket.on('movement', (data) => {
        log.info('Event [movement]');
        log.info(data);

        if (!data || (Object.keys(data).length === 0 && data.constructor === Object)) {
            log.error('Event payload is empty');
            return;
        }

        if (!('device' in data) || !('yaw' in data) || !('pitch' in data) || !('roll' in data)) {
            log.error('Missing required event payload');
            return;
        }

        ctrls.database.read('devices', data.device).then((result) => {
            let obj = {
                yaw: data.yaw,
                pitch: data.pitch,
                roll: data.roll,
                timestamp: Date.now()
            };
            let collection = 'movement/' + result.baby;
            ctrls.database.insert(collection, obj);
            // TODO: Perform anomaly analysis
        }).catch((error) => {
            log.error('Could not save movement data!');
        });
    });
};
