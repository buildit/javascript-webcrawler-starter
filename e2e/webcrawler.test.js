const TIMEOUT = 20000

const TEST_DOMAIN = process.env.TEST_DOMAIN || 'http://localhost:9000'

describe('Webcrawler', () => {

  beforeAll(async () => await page.goto('http://localhost:9000', { waitUntil: 'domcontentloaded' }))

  it('should match the expected output format', async () => {
    await page.waitForSelector('form[name=crawler]')

    await expect(page).toFillForm('form[name=crawler]', { domain: TEST_DOMAIN })
    await expect(page).toClick('button[name=submit]')

    const preSelector = 'pre'
    await page.waitForSelector(preSelector)
    const result = await page.evaluate(preSelector => JSON.parse(document.querySelector(preSelector).textContent), preSelector)

    expect(result).toMatchObject([
      {
        uri: 'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/index.html',
        internalLinks: [
          'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/index.html',
          'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/about.html',
          'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/search.html',
          'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/contact.html',
          'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/articles.html',
          'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/articles-2020-03-24-scraping-the-web-for-fun-and-profit.html',
          'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/articles-2020-03-23-why-language-x-is-the-best.html',
          'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/feed.xml',
        ],
        externalLinks: [
          'https://google.com',
          'https://stackoverflow.com',
          'https://reddit.com',
        ],
        images: [],
      },
      {
        uri: 'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/about.html',
        internalLinks: [
          'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/index.html',
          'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/search.html',
          'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/contact.html',
        ],
        externalLinks: [],
        images: [],
      },
      {
        uri: 'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/search.html',
        internalLinks: [
          'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/index.html',
        ],
        externalLinks: [],
        images: [],
      },
      {
        uri: 'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/contact.html',
        internalLinks: [
          'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/index.html',
          'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/about.html',
          'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/search.html',
        ],
        externalLinks: [],
        images: [],
      },
      {
        uri: 'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/articles.html',
        internalLinks: [
          'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/index.html',
          'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/search.html',
          'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/contact.html',
          'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/articles-2020-03-24-scraping-the-web-for-fun-and-profit.html',
          'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/articles-2020-03-23-why-language-x-is-the-best.html',
        ],
        externalLinks: [],
        images: [],
      },
      {
        uri: 'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/articles-2020-03-24-scraping-the-web-for-fun-and-profit.html',
        internalLinks: [
          'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/index.html',
          'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/search.html',
          'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/contact.html',
          'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/articles.html',
        ],
        externalLinks: [],
        images: [],
      },
      {
        uri: 'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/articles-2020-03-23-why-language-x-is-the-best.html',
        internalLinks: [
          'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/index.html',
          'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/search.html',
          'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/contact.html',
          'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/articles.html',
        ],
        externalLinks: [],
        images: [],
      },
      {
        uri: 'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/feed.xml',
        internalLinks: [
          'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/articles-2020-03-24-scraping-the-web-for-fun-and-profit.html',
          'http://buildit-candidate-tester-fake-site.s3.amazonaws.com/articles-2020-03-23-why-language-x-is-the-best.html',
        ],
        externalLinks: [],
        images: [],
      },
    ])
  }, TIMEOUT)

})
