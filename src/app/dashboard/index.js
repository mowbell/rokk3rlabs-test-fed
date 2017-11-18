import angular from 'angular';
import 'angular-chart.js';
import {SpeedZonesComponent, SpeedAverageComponent, CountByZonesComponent} from './components';
import ActivityService from './services/activity';

import {Dashboard} from './dashboard';
const dashboardModule = angular
    .module('app.dashboard', ['chart.js'])
    .service('Activity', ActivityService)
    .component('dashboard', Dashboard)
    .component('speedZones', SpeedZonesComponent)
    .component('speedAvg', SpeedAverageComponent)
    .component('countByZones', CountByZonesComponent);

export default dashboardModule;
