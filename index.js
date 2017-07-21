const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const log = require('winston');

var config = require('./config');
var app = express();

let mode = 'dev';
let server = config.dev;

log.add(log.transports.File, {
    filename: config.log
});

if (config.mode === 'PROD') {
    log.remove(log.transports.Console);
    mode = 'tiny';
    server = config.prod;
}

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(morgan(mode));

var _server = app.listen(server.port, server.host, () => {
    log.info(`Server listening on port: ${server.port}`);
});

require('./api')(app, _server);
