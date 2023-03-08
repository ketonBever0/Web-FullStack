const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    userid: {
        type: mongoose.Types.ObjectId,
        ref: 'users'
    },
    imageName: {
        type: String,
        minLength: 5,
        required: [true, "Meg kell adni a fájl nevét!"]
    }
});

module.exports = mongoose.model('images', imageSchema);