const User = require('../models/userModel')

const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

module.exports = {
  getUserByEmail
};

