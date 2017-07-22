const log = require('winston');
const firebase = require('firebase');
const config = require('../../../config');
var db = config[config.mode].database.node;

// var ref = firebase.database().ref('sleepyzzz-dev');
//
// var messageRef = ref.child('messages');
// var messageRef = messageRef.push();
// console.log('here');
// messageRef.set({
//     name: 'max'
// });
module.exports = {
    insert: (collection, data) => {
        log.info('Controller [database] Function [insert]');
        log.info(`Inserting data into Firebase [${collection}]`);
        let ref = firebase.database().ref(db);
        let collectionRef = ref.child(collection).push();
        collectionRef.set(data).then(() => {
            log.info(`Successfully inserted data into Firebase [${collection}]`);
        }).catch((error) => {
            log.error(`Failed Inserting data into Firebase [${collection}]`, error);
        });
    }
};
