const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { hooks } = require('./config/hooks');
const { SPECS } = require('./config/specs')
const { capability } = require('./config/capabilities')

const argv = yargs(hideBin(process.argv)).argv;

const SPEC_NAME = process.env.SPEC || argv.SPEC || 'regression';

exports.config = {
    runner: 'local',
    specs: SPECS[SPEC_NAME],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    ...capability,
    services: [ "visual" ],
    logLevel: 'error',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: [['allure', {outputDir: 'allure-results'}]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    ...hooks,
}
