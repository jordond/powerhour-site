import 'angular-material/angular-material.css';
import 'font-awesome/css/font-awesome.css';

// Core vendor libs
import ngAnimate from 'angular-animate';
import ngUiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';

const dependencies = [
 /* Angular modules */
  ngAnimate,

 /* Cross-app modules */

 /* 3rd party modules */
  ngUiRouter,
  ngMaterial
];

const core =
  angular
    .module('app.core', dependencies);

export default core;
