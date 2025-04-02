const mongoose = require('mongoose');
require ('dotenv').config();

const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL);

const db = mongoose.connection;

db.on("connected", () => {
    console.log('MONGODB Connected !.......');
})

db.on('disconnected',()=> {
    console.log('MONGODB Disconnected !.......');
})

db.on('error', ()=> {
    console.log('Error while MONGODB connection !.......');
})

module.exports = db;