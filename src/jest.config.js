// jest.config.js

module.exports = {
  testEnvironment: 'node',
  verbose: true,
  setupFiles: ['dotenv/config', './tests/setup.js'], 
  globalTeardown: './tests/teardown.js',
  coverageThreshold: {
    global: {
      statements: 60,
      branches: 60,
      functions: 60,
      lines: 60,
    },
  },
};
