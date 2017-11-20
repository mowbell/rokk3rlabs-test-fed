import './dashboard.scss';
import ZoneSpeed from './vo/zone-speed';
const INTERVAL_SECONDS = 5000;
class DashboardCtrl {
  constructor($log, Activity, $interval) {
    'ngInject';
    this.$log = $log;
    this.Activity = Activity;
    this.$interval = $interval;

    this.speedAverages = [];
    this.zoneCounts = [];
    this.zonesSpeeds = {zones: {}, times: []};
    this.zones = {};
  }
  $onInit() {
    this.startActivityUpdater();
  }
  startActivityUpdater() {
    this.updateCharts();
    this.$interval(this.updateCharts.bind(this), INTERVAL_SECONDS);
  }
  updateCharts() {
    const zonesData = this.Activity.getNewData();
    zonesData.forEach(zoneData => {
      const zoneId = zoneData.zoneId;
      if (!this.zones[zoneId]) {
        this.zones[zoneId] = new ZoneSpeed(zoneId);
      }
      const zoneSpeed = this.zones[zoneId];
      zoneSpeed.addSpeed(zoneData.data);
    });
    this.updateSpeedAvgChartData();
    this.updateCountByZoneChartData();
    this.updateZonesSpeedChartData();
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
  updateCountByZoneChartData() {
    this.zoneCounts = Object.entries(this.zones).map(zone => {
      const [zoneId, zoneSpeed] = zone;
      return {
        zoneId,
        count: zoneSpeed.totalCount
      };
    });
  }
  updateZonesSpeedChartData() {
    const speedsData = {zones: {}};
    Object.entries(this.zones).forEach((zone, index) => {
      const [zoneId, zoneSpeed] = zone;
      speedsData.zones[zoneId] = zoneSpeed.speeds;
      if (index === 0) {
        speedsData.times = zoneSpeed.times;
      }
    });
    this.zonesSpeeds = speedsData;
  }

}

export const Dashboard = {
  template: require('./dashboard.html'),
  controller: DashboardCtrl
};

