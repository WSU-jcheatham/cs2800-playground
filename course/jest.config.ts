import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  testEnvironment: './jest.test-env.ts',
  globalSetup: './jest.global-setup.ts',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  globalTeardown: './jest.global-teardown.ts',
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '\\.html$': 'jest-raw-loader',
    '\\.css': 'jest-raw-loader',
  },
};

export default config;
