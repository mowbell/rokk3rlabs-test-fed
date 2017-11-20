class SpeedAverageCtrl {
  constructor() {
    this.labels = [];
    this.chartData = [];
    this.options = this.buildOptions();
  }
  $onChanges() {
    this.labels = [];
    this.chartData = [];
    this.averages.forEach(zoneAVG => {
      this.labels.push(zoneAVG.zoneId);
      this.chartData.push(zoneAVG.avg);
    });
  }
  buildOptions() {
    return {
      responsive: true,
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          boxWidth: 10
        }
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
}
export const SpeedAverageComponent = {
  template: require('./speed-average.html'),
  bindings: {
    averages: '<'
  },
  controller: SpeedAverageCtrl
};
