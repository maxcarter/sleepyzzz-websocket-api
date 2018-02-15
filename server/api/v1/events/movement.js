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

        if (!('device' in data) || !('x' in data) || !('y' in data) || !('z' in data)) {
            log.error('Missing required event payload');
            return;
        }

        ctrls.database.read('devices', data.device).then((result) => {
            let obj = {
                x: data.x,
                y: data.y,
                z: data.z,
                fall: data.fall,
                timestamp: Date.now()
            };
            let collection = 'movement/' + result.baby;
            ctrls.database.insert(collection, obj);
        }).catch((error) => {
            log.error('Could not save movement data!');
            log.error(error)
        });
    });

    ctrls.database.listenChild('movement', '-KpedgUfDOSP0dTgoFP0', (snap) => {
        let data = snap.val()
        socket.emit('-KpedgUfDOSP0dTgoFP0:movement', data)
    });
    ctrls.database.listenChild('movement', '-L5KsTg-Th-BLKf0n3B-', (snap) => {
        let data = snap.val()
        socket.emit('-L5KsTg-Th-BLKf0n3B-:movement', data)
    });
    ctrls.database.listenChild('movement', '-L5KvH-aTUSfnrBDdF1F', (snap) => {
        let data = snap.val()
        socket.emit('-L5KvH-aTUSfnrBDdF1F:movement', data)
    });
};
