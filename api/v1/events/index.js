module.exports = (socket) => {
    require('./hello')(socket);
    require('./heartrate')(socket);
    require('./movement')(socket);
    require('./temperature')(socket);
};
