const User = require('../models/userModel')
const bcrypt = require('bcrypt');
const saltRounds = 10;


const getUsers = async () => {
  return User.find({isActive: true})

};

const getUserById = async (id) => {
  return User.findById(id);
};

const createUser = async (userData) => {
  const hashedPassword = await bcrypt.hash(userData.password, saltRounds);
  userData.password = hashedPassword;
  const user = new User(userData);
  return user.save();
};

const updateUser = async (id, userData) => {
  if (userData.password) {
      userData.password = await bcrypt.hash(userData.password, saltRounds);
  }
  return User.findByIdAndUpdate(id, userData, { new: true });
};

const deleteUser = async (id) => {
  return User.findByIdAndUpdate(id, { isActive: false }, { new: true });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
