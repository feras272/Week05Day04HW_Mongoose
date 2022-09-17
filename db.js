const mongoose = require('mongoose');
const mongooseURI = 'mongodb://localhost:27017/favFood';
const db = mongoose.connection;

mongoose.connect(mongooseURI);
    /* , () => {
    console.log('DATABASE IS ESTABLISHED ...');
})
*/

db.on('error', (err) => {
    console.log('Error occured during connecting MongoDB');
});

db.on('connected', () => {
    console.log('MongoDB connected successfully');
});