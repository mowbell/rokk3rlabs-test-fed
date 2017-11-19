class SpeedZonesCtrl {
  constructor() {
    this.labels = [];
    this.series = [];
    this.data = [];
    // this.datasetOverride = [{yAxisID: 'y-axis-1'}, {yAxisID: 'y-axis-2'}];

    this.options = this.buildOptions();
  }
  $onChanges() {
    this.series = Object.keys(this.speeds.zones);
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
      }
      /* scales: {
        yAxes: [
          {
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left'
          },
          {
            id: 'y-axis-2',
            type: 'linear',
            display: true,
            position: 'right'
          }
        ]
      } */
    };
  }
}

export const SpeedZonesComponent = {
  template: require('./speed-zones.html'),
  bindings: {
    speeds: '<'
  },
  controller: SpeedZonesCtrl
};
