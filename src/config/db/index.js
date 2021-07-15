const mongoose = require('mongoose');

async function connect () {
    try {
        await mongoose.connect('mongodb://localhost:27017/blog_nodejs', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('connect successfully !!!')
    } catch (e) {
        console.log('connect failure !!!')
    }

}

module.exports = { connect }