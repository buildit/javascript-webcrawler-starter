const TIMEOUT = 20000

describe('Webcrawler', () => {

  beforeAll(async () => await page.goto('http://localhost:8080', { waitUntil: 'domcontentloaded' }))

  it('should match the expected output format', async () => {
    await page.waitForSelector('form[name=crawler]')

    await expect(page).toFillForm('form[name=crawler]', { domain: 'http://ronjefferies.com' })
    await expect(page).toClick('button[name=submit]')

    const preSelector = 'pre'
    await page.waitForSelector(preSelector)
    const result = await page.evaluate(preSelector => JSON.parse(document.querySelector(preSelector).textContent), preSelector)

    expect(result).toMatchObject({
      uri: 'https://test.com',
      internalLinks: [ 'https://test.com/about.html' ],
      externalLinks: [ 'https://google.com' ],
      images: [ 'https://test.com/assets/some.svg' ],
    })
  }, TIMEOUT)

})
