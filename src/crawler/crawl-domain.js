/**
 * Basically, setTimeout for async/await
 * @param {number} duration number of milliseconds to wait before resolving
 */
const wait = async duration => new Promise(resolve => setTimeout(resolve, duration))

/**
 * Dummy implementation of a domain crawler.
 * 
 * This is here purely as a reference for both expected input and output
 * of this exercise.
 * 
 * This function should return data as defined in `src/model.js` and the
 * markup of the page found at `domain` for embedding into the UI.
 * 
 * Note that this function uses async/await.
 * @param {string} domain the domain/URL to start crawling from
 */
export const crawlDomain = async (domain) => {
  console.log(`CRAWLING DOMAIN: ${domain}`)

  // Wait four seconds. In reality this could take so much longer.
  await wait(4000)

  const result = [
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
  ]

  return result
}
