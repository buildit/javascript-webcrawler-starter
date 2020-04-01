Please, note that you have 5 days to complete the exercise from the day it has been sent out.

Here are the instructions for the Buildit - Wipro Digital Frontend Engineer:

## What we are looking for
There are no tricks or hidden agendas.

The purpose of this exercise is for you to demonstrate your technical knowledge, reasoning, and engineering practices using current software development technologies and methods.

Please make sure your code is clear and demonstrates your best practices.

The exercise should be done as if you were building software to hand off to someone else.

Refrain from using this as an opportunity to learn a new framework, library or paradigm besides what you feel would be essential to completing this task.

Your solution will form the basis for discussion in subsequent interviews.

## What you need to do
Please write a simple, web crawler in Javascript that works in the browser.

As a starting point, a dummy implementation exists in `src/crawler/crawl-domain.js`.

The crawler should be limited to one domain.

Given a starting URL – say https://test.com - it should visit all pages within the domain, but not follow the links to external sites such as Google or Twitter.

For each page that is crawled, you must perform the following:

* Embed the page content in a container element
* Add a tab element that, when clicked, will show the previously embedded content
* Embed a JSON object as described in `src/model.js` in a `pre` element

In addition to the crawler, you must write helper/boilerplate functionality as described/stubbed within `src/app/helpers.js`.

Your code must include unit tests.

Where possible please include your commit history to provide visibility of your thinking and working practice.

## What we give you
We know you're busy - you probably have other interviews and exercises from many other potential employers, and most likely you're also still working hard for your current employer.

To that end, this exercise gives you _most_ of what you need in terms of a working UI. For reference, we're using a plain copy of [Bulma](https://bulma.io/) for styling.

Having said that, you are free to modify the code as you see fit. However, please ensure that the end-to-end test suite `e2e/webcrawler.test.js` continues to work.

## What you need to share with us
* A working crawler as per requirements above
* An updated README.md explaining:
* Reasoning and describe any trade offs
* Explanation of what could be done with more time
* Project builds / runs / tests as per instruction

Good luck and thank you for your time - we look forward to seeing your creation.

## Run Requirements
* `node >= 12`
* `yarn >= 1.22`

## Setup the development environment
```bash
$ yarn
```

## Running the app
Once running, you can point your browser at http://localhost:8080.

- Run with the command
```bash
$ yarn serve
```

- Run and watch for changes
```bash
$ yarn serve:watch
```

- Run unit tests for suites under `src`
```bash
$ yarn test
```

- Run end-to-end tests for suites under `e2e`
```bash
$ yarn test:e2e
```

- Clean up `dist`
```bash
$ yarn clean
```

- Build `dist` manually (`yarn serve` + `yarn serve:watch` build automatically)
```bash
$ yarn build
```
