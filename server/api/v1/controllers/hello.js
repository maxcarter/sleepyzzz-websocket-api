const log = require('winston');

module.exports = {
    /**
     * A sample controller to demonstarte our architecture
     * @param  {Function} callback JavaScript callback
     */
    world: (callback) => {
        log.info('Controller [hello] - function [world]');
        try {
            let result = 'Hello World';
            callback(null, result);
        } catch (error) {
            log.error('Hello Controller failed', error);
            callback(error);
        }
    }
};
