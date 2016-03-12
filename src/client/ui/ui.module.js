import angular from 'angular';

import moment from 'moment';
import angularMoment from 'angular-moment';

import core from '../core/core.module';
import githubActivity from './github-activity/github-activity.module';

import header from './header/header.component';
import highlights from './highlights/highlights.component';

const dependencies = [
  core,
  githubActivity,
  angularMoment.name
];

const mod =
  angular
    .module('app.ui', dependencies)
    .component('header', header)
    .component('highlights', highlights);

export default mod.name;
