const log = require('winston');
var ctrls = require('../controllers');

module.exports = (socket) => {
    log.info('Initializing Event [temperature]');

    socket.on('temperature', (data) => {
        log.info('Event [temperature]');
        log.info(data);

        if (!data || (Object.keys(data).length === 0 && data.constructor === Object)) {
            log.error('Event payload is empty');
            return;
        }

        if (!('device' in data) || !('temperature' in data)) {
            log.error('Missing required event payload');
            return;
        }

        ctrls.database.read('devices', data.device).then((result) => {
            let obj = {
                temperature: data.temperature,
                timestamp: Date.now()
            };
            let collection = 'temperature/' + result.baby;
            ctrls.database.insert(collection, obj);
        }).catch((error) => {
            log.error('Could not save temperature data!');
        });
    });

    ctrls.database.listenChild('temperature', '-KpedgUfDOSP0dTgoFP0', (snap) => {
        let data = snap.val()
        socket.emit('-KpedgUfDOSP0dTgoFP0:temperature', data)
    });
    ctrls.database.listenChild('temperature', '-L5KsTg-Th-BLKf0n3B-', (snap) => {
        let data = snap.val()
        socket.emit('-L5KsTg-Th-BLKf0n3B-:temperature', data)
    });
    ctrls.database.listenChild('temperature', '-L5KvH-aTUSfnrBDdF1F', (snap) => {
        let data = snap.val()
        socket.emit('-L5KvH-aTUSfnrBDdF1F:temperature', data)
    });
};
