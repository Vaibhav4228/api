const jwt = require('jsonwebtoken');
const config = require('../config/config');


//user authentication middleware
const authenticate = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) {
      return res.status(401).json({ error: 'No token' });
  }
  try {
      const decoded = jwt.verify(token, config.jwtSecret);
      req.user = decoded;
      next();
  } catch (error) {
      res.status(401).json({ error: 'Token is not valid' });
  }
};

module.exports = authenticate;

