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
        }).catch((error) => {
            log.error('Could not save heartrate data!');
        });
    });

    ctrls.database.listenChild('heartrate', '-KpedgUfDOSP0dTgoFP0', (snap) => {
        let data = snap.val()
        socket.emit('-KpedgUfDOSP0dTgoFP0:heartrate', data)
    });
    ctrls.database.listenChild('heartrate', '-L5KsTg-Th-BLKf0n3B-', (snap) => {
        let data = snap.val()
        socket.emit('-L5KsTg-Th-BLKf0n3B-:heartrate', data)
    });
    ctrls.database.listenChild('heartrate', '-L5KvH-aTUSfnrBDdF1F', (snap) => {
        let data = snap.val()
        socket.emit('-L5KvH-aTUSfnrBDdF1F:heartrate', data)
    });
};
