module.exports = {
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: [
    '!**/node_modules/**',
    '!**/index.js',
    'src/**/*.js',
  ],
  coverageDirectory: 'coverage',
  reporters: ['default'],
  rootDir: process.cwd(),
  roots: [
    '<rootDir>/src',
  ],
  verbose: true,
}
