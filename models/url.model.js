const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        unique: true,
        required: true
    },

    redirectedUrl: {
        type: String,
        required: true
    },

    visitedHistory: [{
        timeStams: {
            type: Number
        }
    }]
})

const Url = mongoose.model('Url',urlSchema);

module.exports = Url;