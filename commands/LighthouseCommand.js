class LighthouseCommand {
  constructor(lighthouseService) {
    this.lighthouseService = lighthouseService;
  }

  execute() {
    return this.lighthouseService.getPerformanceScoreInBulk();
  }
}

module.exports = {
  LighthouseCommand
}