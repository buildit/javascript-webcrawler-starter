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

  const result = {
    uri: 'https://test.com',
    internalLinks: [ 'https://test.com/about.html' ],
    externalLinks: [ 'https://google.com' ],
    images: [ 'https://test.com/assets/some.svg' ],
  }

  return result
}
