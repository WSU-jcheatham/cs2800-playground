const config = {
  transform: { '\\.[jt]sx?$': 'babel-jest' },
  resolver: './server/jest.resolver.js',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./server/jest.setup.js']
};

module.exports = config;
