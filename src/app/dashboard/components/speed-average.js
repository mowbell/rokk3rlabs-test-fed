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
          boxWidth: 10,
          fontFamily: '\'Open Sans\', sans-serif',
          fontSize: 9
        }
      },
      title: {
        display: true,
        text: 'Speed Average',
        fontFamily: '\'Open Sans\', sans-serif',
        fontColor: '#7cb2ed'
      },
      animation: {
        animateScale: true,
        animateRotate: true
      },
      tooltips: {
        titleFontFamily: '\'Open Sans\', sans-serif',
        bodyFontFamily: '\'Open Sans\', sans-serif'
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
