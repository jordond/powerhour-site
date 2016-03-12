import angular from 'angular';

import service from './github-api.service';
import activity from './activity-view/activity.component';
import buildStatus from './status-badge/status-badge.component';
import commitStatus from './commit-status/commit-status.component';
import branchFilter from './branch.filter';

const dependencies = [];

const mod =
  angular
    .module('app.ui.githubActivity', dependencies)
    .service('githubApi', service)
    .component('githubActivity', activity)
    .component('statusBadge', buildStatus)
    .component('commitStatus', commitStatus)
    .filter('branch', branchFilter);

export default mod.name;
