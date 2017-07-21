module.exports = (socket) => {
    require('./hello')(socket);
    require('./heartrate')(socket);
};
