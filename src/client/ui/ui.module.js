/**
 * Module which contains all the sections of the ui
 *
 * Contains ui submodules for more complex components
 */

import angular from 'angular';

import core from '../core/core.module';

/** UI sub-modules */
import githubActivity from './github-activity/github-activity.module';
import featureList from './feature-list/feature-list.module';

/** UI components */
import header from './header/header.component';
import highlights from './highlights/highlights.component';
import footer from './footer/footer.component';

const dependencies = [
  core,

  githubActivity,
  featureList
];

const mod =
  angular
    .module('app.ui', dependencies)
    .component('header', header)
    .component('highlights', highlights)
    .component('footer', footer);

export default mod.name;
