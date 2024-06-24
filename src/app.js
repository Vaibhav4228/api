const express = require('express');
const app = express();
const { connectDB } = require('./utils/db'); // 
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const authenticate = require('./middleware/authenticate');
const config = require('./config/config');

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/worko/user', authenticate, userRoutes);

connectDB(); 

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});

module.exports = app;
