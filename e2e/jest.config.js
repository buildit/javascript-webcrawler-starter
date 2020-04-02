module.exports = {
  preset: 'jest-puppeteer',
  testRegex: './*\\.test\\.js$',
  reporters: [
    'default',
    ['jest-junit', {
      outputDirectory: 'test-reports',
      outputName: 'e2e.junit.xml',
    }],
  ],
}
