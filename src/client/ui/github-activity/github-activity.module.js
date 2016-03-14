import angular from 'angular';

import angularMoment from 'angular-moment';

import service from './github-api.service';
import activity from './activity-view/activity.component';
import buildStatus from './status-badge/status-badge.component';
import commitStatus from './commit-status/commit-status.component';
import { branch, reverse } from './misc.filter';

const dependencies = [
  angularMoment.name
];

const mod =
  angular
    .module('app.ui.githubActivity', dependencies)
    .service('githubApi', service)
    .component('githubActivity', activity)
    .component('statusBadge', buildStatus)
    .component('commitStatus', commitStatus)
    .filter('branch', branch)
    .filter('reverse', reverse);

export default mod.name;
