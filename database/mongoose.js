const mongoose = require('mongoose');
require('dotenv').config();

module.exports = {
    init: () => {
        const dbOptions = {
            //useNewUrlPraser: true,
            //useUndefinedTopology: true,
            //autoIndex: false,
            //poolSize: 5,
            //connectionTimeoutMS: 10000,
            //family: 4,
            //useFindAndModify: false
        };

        mongoose.connect(`mongodb+srv://LocatedBiome:${process.env.PASS}@cluster0.xbxt7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, dbOptions);
        
        mongoose.Promise = global.Promise;

        mongoose.connection.on('connected', () => {
            console.log('The bot has connected to the database.');
        });
        mongoose.connection.on('disconnected', () => {
            console.log('The bot has disconnected from the database.');
        });
        mongoose.connection.on('err', (err) => {
            console.log('There was an error with the connection to the database: ' + err);
        });
    }
}
