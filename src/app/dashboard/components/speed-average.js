class SpeedAverageCtrl {
  constructor() {
    this.labels = [];
    this.chartData = [];
    this.options = {
      responsive: true,
      legend: {
        display: true,
        position: 'bottom'
      },
      title: {
        display: true,
        text: 'Speed Average'
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    };
  }
  $onChanges(changesObj) {
    this.labels = [];
    this.chartData = [];
    this.averages.forEach(zoneAVG => {
      this.labels.push(zoneAVG.zoneId);
      this.chartData.push(zoneAVG.avg);
    });
  }
}
export const SpeedAverageComponent = {
  template: require('./speed-average.html'),
  bindings: {
    averages: '<'
  },
  controller: SpeedAverageCtrl
};
