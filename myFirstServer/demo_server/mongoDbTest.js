const mongoose = require('mongoose');
const { emit } = require('nodemon');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

});

exports.storeElement = ((element) => {
    element.save()
    })
  
    