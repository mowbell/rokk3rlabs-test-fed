class CountByZonesCtrl {
  constructor() {
    this.labels = [];
    this.chartData = [[]];
    this.option = this.buildOptions();
  }
  $onChanges() {
    this.labels = [];
    this.values = [];
    this.counts.forEach((zoneCount, index) => {
      this.labels.push(index + 1);
      this.values.push(zoneCount.count);
    });
    this.chartData = [this.values];
  }
  buildOptions() {
    const that = this;
    return {
      responsive: true,
      title: {
        display: true,
        text: 'Count By Zone'
      },
      legend: {
        display: true,
        position: 'right',
        labels: {
          boxWidth: 0,
          generateLabels() {
            const labels = that.counts.map((countData, index) => {
              return {text: `${index + 1}: Zone ${countData.zoneId}`};
            });
            return labels;
          }
        },
        onClick: null

      },
      scales: {
        yAxes: [{
          ticks: {
            suggestedMin: 0
          }
        }]
      },
      tooltips: {
        callbacks: {
          title([{index}]) {
            if (that.counts) {
              const zoneId = that.counts[index].zoneId;
              return `Zone: ${zoneId}`;
            }
          },
          label({index}, {datasets: [{data}]}) {
            return `Count: ${data[index]}`;
          }
        }
      }
    };
  }
}
export const CountByZonesComponent = {
  template: require('./count-by-zones.html'),
  bindings: {
    counts: '<'
  },
  controller: CountByZonesCtrl
};
