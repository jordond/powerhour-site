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
