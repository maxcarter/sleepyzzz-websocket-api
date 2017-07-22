module.exports = {
    mode: 'dev', // [dev/prod]
    log: 'sleepyzz.log',
    dev: {
        port: 8080,
        host: 'localhost',
        protocol: 'http',
        database: {
            url: "",
            serviceAccount: "",
            node: "sleepyzzz-dev"
        }
    },
    prod: {
        port: 3000,
        host: '',
        protocol: '',
        database: {
            url: "",
            serviceAccount: "",
            node: "sleepyzzz"
        }
    },
    api: {
        version: 'v1'
    }
};
