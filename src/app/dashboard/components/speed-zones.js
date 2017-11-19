class SpeedZonesCtrl {
  constructor() {
    this.labels = [];
    this.series = [];
    this.data = [];
    // this.datasetOverride = [{yAxisID: 'y-axis-1'}, {yAxisID: 'y-axis-2'}];

    this.datasetOverride = [];

    this.options = this.buildOptions();
  }
  $onInit() {
    Object.keys(this.speeds.zones).forEach(key => {
      this.series.push(key);
      this.datasetOverride.push(
        {
          fill: false,
          lineTension: 0
        });
    });
  }
  $onChanges() {
    this.labels = this.speeds.times.map(time => {
      const date = new Date(time);
      return `${date.getHours()}: ${date.getMinutes()}`;
    });
    this.data = Object.values(this.speeds.zones);
  }
  buildOptions() {
    return {
      responsive: true,
      legend: {
        display: true,
        position: 'right',
        labels: {
          boxWidth: 10
        }
      },
      title: {
        display: true,
        text: 'Speed Zones'
      },
      animation: {
        duration: 1,
        easing: 'linear'
      },
      scales: {
        yAxes: [{
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100,
            callback(value, index, values) {
              return value + 'Km';
            }
          }
        }]
      }
    };
  }
}

export const SpeedZonesComponent = {
  template: require('./speed-zones.html'),
  bindings: {
    /* lastTime: '<',
    zones: '<' */
    speeds: '<'
  },
  controller: SpeedZonesCtrl
};
