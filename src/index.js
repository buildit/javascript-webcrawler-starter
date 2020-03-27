/**
 * IIFE body that will be executed within the browser
 * after the page is done loading.
 */

import setupCrawlerApplication from './app'
import crawlDomain from './crawler'

setupCrawlerApplication(crawlDomain)
