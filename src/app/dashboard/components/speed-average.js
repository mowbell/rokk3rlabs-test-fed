export const SpeedAverageComponent = {
  template: require('./speed-average.html'),
  controller() {
    this.labels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    this.data = [300, 500, 100];
  }
};
