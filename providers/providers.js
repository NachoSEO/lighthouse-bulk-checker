const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const desktopConfig = require('lighthouse/lighthouse-core/config/lr-desktop-config');
const mobileConfig = require('lighthouse/lighthouse-core/config/lr-mobile-config');

const options = require('../config/options');
const urls = require('../config/urls');

const { LighthouseRepository } = require('../repositories/LighthouseRepository');

const { LighthouseService } = require('../services/LighthouseService');

const { LighthouseCommand } = require('../commands/LighthouseCommand');



const lighthouseCommand = new LighthouseCommand(
  new LighthouseService(
    new LighthouseRepository(lighthouse, chromeLauncher),
    urls,
    options,
    desktopConfig,
    mobileConfig,
  )
);

module.exports = {
  lighthouseCommand
}