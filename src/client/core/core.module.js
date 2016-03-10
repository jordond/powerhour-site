import angular from 'angular';

import 'font-awesome/css/font-awesome.css';
import 'skeleton-framework/dist/skeleton.min.css';
import 'normalize.css/normalize';
import './core';

// Core vendor libs
import ngAnimate from 'angular-animate';
import ngUiRouter from 'angular-ui-router';

import coreRoutes from './core.routes';

const dependencies = [
 /* Angular modules */
  ngAnimate,

 /* Cross-app modules */

 /* 3rd party modules */
  ngUiRouter
];

const core =
  angular
    .module('app.core', dependencies)
    .config(coreRoutes);

export default core.name;
