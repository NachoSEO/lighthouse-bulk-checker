class LighthouseService {
  constructor(lighthouseRepository, fileRepository, urls, options, desktopConfig, mobileConfig) {
    this.lighthouseRepository = lighthouseRepository;
    this.fileRepository = fileRepository;
    this.urls = urls;
    this.options = options;
    this.desktopConfig = desktopConfig;
    this.mobileConfig = mobileConfig;
  }

  async getPerformanceScoreInBulk() {
    const devices = ['desktop', 'mobile'];
    let scoreMapping = {};
    
    for(const url of this.urls) {
      scoreMapping[url] = {};
      
      for(const device of devices) {
        scoreMapping[url][device] = {};
        const config = device === 'desktop' ? this.desktopConfig : this.mobileConfig;
        const { lighthouse, report } = await this.lighthouseRepository.getPerformanceScore(url, this.options, config);

        const {
          'first-contentful-paint': fcp,
          'largest-contentful-paint':lcp,
          'speed-index': speedIndex,
          'cumulative-layout-shift': cls,
          'max-potential-fid': fid,
          interactive,
        } = report.audits;

        scoreMapping[url][device] = {
          lighthouse,
          fcp,
          lcp,
          speedIndex,
          cls,
          fid,
          interactive
        };
      }
    }
    this._saveReport(JSON.stringify(scoreMapping, 2, 1), './reports/lighthouseReport.json')
    return scoreMapping;
  }

  _saveReport(data, path) {
    return this.fileRepository.createFile(data, path);
  }
}

module.exports = {
  LighthouseService
}
