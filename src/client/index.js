/**
 * Entry-point for the angular application
 *
 * Loads the core module which contains all app-wide deps,
 * and each main page/section. (Currently only one)
 */

import angular from 'angular';

// App modules
import core from './core/core.module';
import main from './main/main.module';

const app =
  angular.module('app', [
    core,
    main
  ]);

export default app;
