const log = require('winston');
const firebase = require('firebase');
const q = require('q');
const config = require('../../../config');
var db = config[config.mode].database.node;

module.exports = {
    insert: (collection, data) => {
        log.info('Controller [database] Function [insert]');
        log.info(`Inserting data into Firebase [${collection}]`);

        let deferred = q.defer();
        let ref = firebase.database().ref(db);
        let collectionRef = ref.child(collection).push();
        collectionRef.set(data).then(() => {
            log.info(`Successfully inserted data into Firebase [${collection}]`);
            deferred.resolve();
        }).catch((error) => {
            log.error(`Failed Inserting data into Firebase [${collection}]`, error);
            deferred.reject(error);
        });

        return deferred.promise;
    }
};
