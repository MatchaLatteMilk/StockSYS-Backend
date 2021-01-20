const mongoose = require('mongoose');
const config = require('../config/connection')

const connect = () => {
    mongoose.Promise = global.Promise;
    mongoose.connect(config.dburl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
    let db = mongoose.connection;
    db.on('open', () =>{
        console.log('connected to mongodb')
    });
    db.on('error', (err) => {
        console.log(`Database error: ${err}`);
    });
}

module.exports = connect;