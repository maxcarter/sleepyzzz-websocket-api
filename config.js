module.exports = {
    mode: 'DEV', // [DEV/PROD]
    log: 'sleepyzz.log',
    tokenSecret: 'test',
    dev: {
        port: 8080,
        host: 'localhost',
        protocol: 'http',
        database: {
            url: "",
            serviceAccount: "",
            node: ""
        }
    },
    prod: {
        port: 3000,
        host: '',
        protocol: '',
        database: {
            url: "",
            serviceAccount: "",
            node: ""
        }
    },
    api: {
        version: 'v1'
    }
};
