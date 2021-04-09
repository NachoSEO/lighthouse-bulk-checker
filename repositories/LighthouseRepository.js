class LighthouseRepository {
  constructor(lighthouse, chromeLauncher) {
    this.lighthouse = lighthouse;
    this.chromeLauncher = chromeLauncher;
  }

  async getPerformanceScore(url, options, deviceConfig) {
    const chrome = await this.chromeLauncher.launch({ chromeFlags: ['--headless'] });
    options.port = chrome.port;
    const runnerResult = await this.lighthouse(url, options, deviceConfig);
    chrome.kill()

    return {
      lighthouse: runnerResult.lhr.categories.performance.score * 100,
      report: runnerResult.lhr
    }
  }
}

module.exports = {
  LighthouseRepository
}
