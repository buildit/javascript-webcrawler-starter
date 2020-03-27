/**
 * Returns a reference to the webcrawler form
 */
export const $form = document.querySelector('form[name=crawler]')

/**
 * Returns a reference to the domain text input from the context of `$form`
 */
export const $domain = $form.querySelector('input[name=domain]')

/**
 * Returns a reference to the submit button from the context of `$form`
 */
export const $submit = $form.querySelector('button[name=submit]')
