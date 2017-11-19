import angular from 'angular';
import {main} from './app/main';
import 'angular-ui-router';
import './app/dashboard';
import routesConfig from './routes';

import './index.scss';

export const app = 'app';

angular
  .module(app, ['ui.router', 'app.dashboard'])
  .config(routesConfig)
  .component('app', main);
