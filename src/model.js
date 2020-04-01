/**
 * Simplistic model of the expected output from a crawled page.
 * 
 * Example:
 * 
 * {
 *   "uri": "https://test.com/about.html",
 *   "internalLinks": [
 *     "https://test.com/",
 *     "https://test.com/about.html#",
 *     "https://test.com/search.html",
 *     "https://test.com/categories.html",
 *     "https://test.com/articles/2015-04-23-forum/",
 *     "https://test.com/feed.xml"
 *   ],
 *   "externalLinks": [
 *     "https://groups.google.com/forum/#!forum/test",
 *     "https://test.tumblr.com/",
 *     "https://www.agilementoring.com/",
 *     "mailto:test@test.com",
 *     "https://github.com/test",
 *     "https://twitter.com/test"
 *   ],
 *   "images": [
 *     "/assets/test.svg"
 *   ]
 * }
 * 
 * 
 */
export const PageModel = {
  uri: null, // string - The URL of the crawled page
  internalLinks: [], // string[] - URLs of links to the same domain as `uri` found within the page at `uri`
  externalLinks: [], // string[] - URLs of links that are external to `uri`
  images: [], // string[] - URLs found in img tags found within `uri`
}
