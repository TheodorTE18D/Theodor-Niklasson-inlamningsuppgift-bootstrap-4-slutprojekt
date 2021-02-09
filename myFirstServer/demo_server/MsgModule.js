const mongoose = require('mongoose');


const messageSchema = new mongoose.Schema({
    name: String,
    msg: String
  });

  const Message = mongoose.model('Message', messageSchema);

  exports.createMessage = (name, msg) => {
    var message = new Message({
      name: name,
      msg: msg,
      
    })
  
    return message
    }
  