const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nameFirst: String,
    nameLast: String,
    phoneNumber: String,
    email: String,
    password: String
  });

  const User = mongoose.model('User', userSchema);

  exports.createUser = (inNameFirst, inNameLast, inPhoneNumber, inEmail, inPassword ) => {
    var user = new User({
      nameFirst: inNameFirst,
      nameLast: inNameLast,
      phoneNumber: inPhoneNumber,
      email: inEmail,
      password: inPassword
    });
  
    return user
    };
  
  exports.getOneUser = async (inEmail) => {
    return await User.findOne({ email: inEmail})
  };