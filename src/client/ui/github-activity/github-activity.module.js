import angular from 'angular';

import component from './activity-view/activity.component';
import service from './github-api.service';
import branchFilter from './branch.filter';

const dependencies = [];

const mod =
  angular
    .module('app.ui.githubActivity', dependencies)
    .service('githubApi', service)
    .filter('branch', branchFilter)
    .component('githubActivity', component);

export default mod.name;
