export default class ZoneSpeed {
  constructor(name) {
    this.name = name;
    this.totalCount = 0;
    this.speedSum = 0;
    this.updateData = [];
    this.times = [];
    this.speeds = [];
    this.lastUpdate = null;
  }
  addSpeed({count, speed, time}) {
    this.totalCount += count;
    this.speedSum += speed;
    this.updateData.push({count, speed, time});
    this.times.push(time);
    this.speeds.push(speed);
    this.lastUpdate = {count, speed, time};
  }
  get speedAvg() {
    const avg = this.speedSum / this.updateData.length;
    return Math.floor((avg) * 100) / 100;
  }
  /* get speeds() {
    return this.updateData.map(({speed}) => {
      return speed;
    });
  }

  get times() {
    return this.updateData.map(({time}) => {
      return time;
    });
  } */

}
