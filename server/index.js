const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const log = require('winston');
const firebase = require('firebase');

var config = require('./config');
var app = express();

let mode = 'dev';
let server = config.dev;

log.add(log.transports.File, {
    filename: config.log
});

if (config.mode === 'prod') {
    log.remove(log.transports.Console);
    mode = 'tiny';
    server = config.prod;
}

firebase.initializeApp({
    serviceAccount: server.database.serviceAccount,
    databaseURL: server.database.url
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(morgan(mode));

if (config.mode === 'dev') {
  app.use(express.static('client'));
  app.use('/node_modules', express.static('node_modules'));
}

var _server = app.listen(server.port, server.host, () => {
    log.info(`Server listening on port: ${server.port}`);
});

require('./api')(app, _server);
