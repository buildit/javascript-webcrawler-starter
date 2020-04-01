/**
 * Returns a reference to the webcrawler form
 */
const $form = document.querySelector('form[name=crawler]')

/**
 * Returns a reference to the domain text input from the context of `$form`
 */
const $domain = $form.querySelector('input[name=domain]')

/**
 * Application entrypoint
 * 
 * @param {function} crawler This function will be called when the crawler
 * form is submitted. It will be passed the value of the domain text input.
 */
export const setupCrawlerApplication = (crawler) => {
  $form.onsubmit = handleSubmit(crawler)
}

/**
 * Form submission handler. It is bound at runtime through
 * `setupCrawlerApplication`.
 * 
 * This returned function should perform UI tasks such as toggling
 * loading/busy state, preventing invalid input, etc
 * 
 * @param {*} crawler This function will be called when the crawler
 * form is submitted. It will be passed the value of the domain text input.
 * 
 * @returns {function} an onsubmit event handler function
 */
const handleSubmit = crawler => async (event) => {
  event.preventDefault()

  // Pre-Submit events/triggers here

  const data = await crawler($domain.value)

  // Post-Submit events/triggers here

  setResults(data)
}

/**
 * Do something with result data returned by your crawler function
 * 
 * Again, this is a dummy implementation that should give you a broad
 * idea of what is required to get the crawl results into the UI
 * 
 * @param {*} data 
 */
export const setResults = (data) => {
  const $pre = document.createElement('pre')
  $pre.className = 'box is-radiusless is-size-7'
  $pre.textContent = JSON.stringify(data, null, 2)
  $form.appendChild($pre)
}
