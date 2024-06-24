

const { disconnectDB } = require('../src/utils/db');

module.exports = async () => {
  await disconnectDB();
};
