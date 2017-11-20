import './main.scss';
export const main = {
  template: require('./main.html'),
  controller() {
    this.isNavClosed = false;
    this.onCloseBtn = $event => {
      $event.preventDefault();
      this.isNavClosed = !this.isNavClosed;
    };
  }
};
