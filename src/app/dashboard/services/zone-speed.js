export default class ZoneSpeed {
  constructor(name) {
    this.name = name;
    this.totalCount = 0;
    this.speedSum = 0;
    this.times = [];
  }
  addSpeed({count, speed, time}) {
    this.totalCount += count;
    this.speedSum += speed;
    this.times.push({count, speed, time});
  }
  get speedAvg() {
    const avg = this.speedSum / this.times.length;
    return Math.floor((avg) * 100) / 100;
  }

}
