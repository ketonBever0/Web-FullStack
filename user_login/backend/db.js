const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connect = () => {
    mongoose.connect(process.env.CONNECT,
        (e) => {
            if (e) {
                console.log(e)
            } else {
                console.log("Connected!");
            }
        });
}



module.exports = { connect };