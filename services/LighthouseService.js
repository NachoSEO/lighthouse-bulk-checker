class LighthouseService {
  constructor(lighthouseRepository, urls, options, desktopConfig, mobileConfig) {
    this.lighthouseRepository = lighthouseRepository;
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
        const score = await this.lighthouseRepository.getPerformanceScore(url, this.options, config);
        scoreMapping[url][device] = { ...score };
      }
    }

    console.log(scoreMapping);
  }

}

module.exports = {
  LighthouseService
}
