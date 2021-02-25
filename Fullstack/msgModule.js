const mongoose = require('mongoose');

const msgSchema = new mongoose.Schema({
    message: String
  });

  const msgModel = mongoose.model('msg', msgSchema);

  exports.createMsg = (inMessage) => {
    var msg = new msgModel({
      message: inMessage
    });
  
    return msg
    };
  
  exports.getOneMsg = async (inMessage) => {
    return await msg.findOne({ message: inMessage})
  };