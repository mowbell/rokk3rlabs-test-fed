import {ZONES_ID} from './constants';
import ZoneSpeed from './services/zone-speed';
class DashboardCtrl {
  constructor($log, Activity, $interval) {
    'ngInject';
    this.$log = $log;
    this.Activity = Activity;
    this.$interval = $interval;

    this.speedAverages = [];

    this.initZones();
  }
  $onInit() {
    this.startActivityUpdater();
  }
  startActivityUpdater() {
    this.updateCharts();
    this.$interval(this.updateCharts.bind(this), 5000);
  }
  updateCharts() {
    const zonesData = this.Activity.getNewData();
    zonesData.forEach(zoneData => {
      const zoneSpeed = this.zones[zoneData.zoneId];
      zoneSpeed.addSpeed(zoneData.data);
    });
    this.updateSpeedAvgChartData();
  }
  updateSpeedAvgChartData() {
    this.speedAverages = Object.entries(this.zones).map(zone => {
      const [zoneId, zoneSpeed] = zone;
      return {
        zoneId,
        avg: zoneSpeed.speedAvg
      };
    });
  }
  initZones() {
    this.zones = {};
    ZONES_ID.forEach(zoneId => {
      this.zones[zoneId] = new ZoneSpeed(zoneId);
    });
  }

}

export const Dashboard = {
  template: require('./dashboard.html'),
  controller: DashboardCtrl
};

