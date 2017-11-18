import angular from 'angular';

import {main} from './app/main';
import {SpeedZonesComponent, SpeedAverageComponent, CountByZonesComponent} from './app/dashboard';
import 'angular-ui-router';
import 'angular-chart.js';
import routesConfig from './routes';

import './index.scss';

export const app = 'app';

angular
  .module(app, ['ui.router', 'chart.js'])
  .config(routesConfig)
  .component('app', main)
  .component('speedZones', SpeedZonesComponent)
  .component('speedAvg', SpeedAverageComponent)
  .component('countByZones', CountByZonesComponent);
