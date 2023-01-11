module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/.next/', '/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
};
