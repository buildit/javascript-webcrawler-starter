import { $form, $domain, $submit } from './elements'

/**
 * Application entrypoint
 * 
 * @param {function} crawler This function will be called when the crawler
 * form is submitted. It will be passed the value of the domain text input.
 */
export const setupCrawlerApplication = (crawler) => {
  $form.onsubmit = handleSubmit(crawler)
  focusDomain()
}

/**
 * Form submission handler. It is bound at runtime through
 * `setupCrawlerApplication`.
 * 
 * Handles small UI tasks before and after the crawler function is called.
 * 
 * @param {*} crawler This function will be called when the crawler
 * form is submitted. It will be passed the value of the domain text input.
 */
const handleSubmit = crawler => async (event) => {
  event.preventDefault()

  blurDomain()
  setLoading()
  unsetResults()

  const data = await crawler($domain.value)

  setResults(data)
  unsetLoading()
  focusDomain()
}

/**
 * Focuses the domain text input
 */
export const focusDomain = () => $domain.focus()

/**
 * Removes focus from the domain text input
 */
export const blurDomain = () => $domain.blur()

/**
 * Toggles the presence of both the `is-loading` css class and
 * the `disabled` attribute on the submit button element
 * @param {boolean} force 
 */
const toggleLoading = (force) => {
  $submit.classList.toggle('is-loading', force)
  $submit.toggleAttribute('disabled', force)
}

/**
 * Calls `toggleLoading(true)`
 * @see toggleLoading
 */
export const setLoading = () => toggleLoading(true)

/**
 * Calls `toggleLoading(false)`
 * @see toggleLoading
 */
export const unsetLoading = () => toggleLoading(false)

/**
 * Returns a reference to the `pre` element if it exists
 */
const getPreElement = () => $form.querySelector('pre')

/**
 * Creates a new `pre` element with some pre-defined css classes
 * and attributes before being appended as a child of the crawler form
 * @param {*} data Some kind of data. It is sanitized using
 * `JSON.stringify` before being set onto the pre element via
 * the `textContent` property
 */
export const setResults = (data) => {
  const $pre = document.createElement('pre')
  $pre.className = 'box is-radiusless is-size-7'
  $pre.textContent = JSON.stringify(data, null, 2)
  $form.appendChild($pre)
}

/**
 * Removes the results `pre` element from the crawler form if it exists.
 */
export const unsetResults = () => $form.contains(getPreElement()) && $form.removeChild(getPreElement())
