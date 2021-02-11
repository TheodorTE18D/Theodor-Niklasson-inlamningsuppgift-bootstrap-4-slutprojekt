const mongoose = require('mongoose');
const { emit } = require('nodemon');
mongoose.connect('mongodb://localhost/Users', {useNewUrlParser: true}, {useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('DB connection successful');
});

exports.storeElement = ((element) => {
    element.save();
    });
  
    