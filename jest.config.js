/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  transformIgnorePatterns: [
    "/node_modules/(?!(react-router-dom)/)",
  ],
  moduleNameMapper: {
    '^react-router-dom$': require.resolve('react-router-dom'),
  },
};