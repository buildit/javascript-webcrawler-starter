module.exports = {
  coverageDirectory: 'test-reports/coverage',
  collectCoverageFrom: [
    '!**/node_modules/**',
    '!**/index.js',
    'src/**/*.js',
  ],
  reporters: [
    'default',
    ['jest-junit', {
      outputDirectory: 'test-reports',
      outputName: 'unit.junit.xml',
    }],
  ],
  rootDir: process.cwd(),
  roots: [
    '<rootDir>/src',
  ],
}
