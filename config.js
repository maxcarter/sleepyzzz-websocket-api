module.exports = {
    mode: 'DEV', // [DEV/PROD]
    log: 'sleepyzz.log',
    tokenSecret: 'test',
    dev: {
        port: 8080,
        host: 'localhost',
        protocol: 'http'
    },
    prod: {
        port: 3000,
        host: '',
        protocol: ''
    },
    api: {
        version: 'v1'
    }
};
