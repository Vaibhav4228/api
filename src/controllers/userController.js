const UserServices = require('../services/userService')
const UserDTO = require('../dto/userDTO')

//List of all users

const getUserList = async(req, res) => {
  try {
    const users = await UserServices.getAllUsers()
    res.json(users.map(user => new UserDTO(user)));

  } catch (error) {
    res.status(500).json({error: error.message})
    
  }
};

//getting user by id
const getUserById = async (req, res) => {
  try {
      const user = await UserService.getUserById(req.params.userId);
      if (user) {
          res.json(new UserDTO(user));
      } else {
          res.status(404).json({ error: 'User not found' });
      }
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};


//creating a new user
const createUser = async (req, res) => {
  try {
      const user = await UserService.createUser(req.body);
      res.status(201).json(new UserDTO(user));
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

//updating a user
const updateUser = async (req, res) => {
  try {
      const user = await UserService.updateUser(req.params.userId, req.body);
      if (user) {
          res.json(new UserDTO(user));
      } else {
          res.status(404).json({ error: 'User not found' });
      }
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};


//deleting a user
const deleteUser = async (req, res) => {
  try {
      const user = await UserService.deleteUser(req.params.userId);
      if (user) {
          res.json(new UserDTO(user));
      } else {
          res.status(404).json({ error: 'User not found' });
      }
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};


module.exports = {
  getUserList,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
