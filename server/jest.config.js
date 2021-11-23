const config = {
  transform: { '\\.[jt]sx?$': 'babel-jest' },
  resolver: './server/jest.resolver.js',
  testEnvironment: 'jsdom'
};

module.exports = config;
