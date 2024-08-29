const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const urls = require('../data/urls.json')
const urls1 = require('../data/urls1.json')

const argv = yargs(hideBin(process.argv)).argv;

function getUrl() {
  return urls[argv.TEST_ENV];
}

function getUrlStr() {
  return `https://www.${argv.TEST_ENV === 'prod' ? '' : argv.TEST_ENV + '.'}onliner.by/`
}

function getUrl1(urlType) {
  return urls[urlType][argv.TEST_ENV];
}
