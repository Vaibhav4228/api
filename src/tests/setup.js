

const { connectDB } = require('../src/utils/db');

module.exports = async () => {
  await connectDB();
};
