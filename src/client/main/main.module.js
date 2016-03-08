import angular from 'angular';

import core from '../core/core.module';

import routes from './main.routes';
import mainComponent from './main.component';

const dependencies = [
  core
];

const mod =
  angular
    .module('app.main', dependencies)
    .config(routes)
    .component('main', mainComponent);

export default mod.name;
