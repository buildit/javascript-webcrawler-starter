// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: [
    '!**/node_modules/**',
    '!**/index.js',
    'src/**/*.js',
  ],
  coverageDirectory: 'coverage',
  preset: 'jest-puppeteer',
  reporters: ['default'],
  rootDir: process.cwd(),
  roots: [
    '<rootDir>/src',
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.js$',
  verbose: false,
}
