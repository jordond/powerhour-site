import angular from 'angular';

import core from '../core/core.module';

import header from './header/header.component';
import highlights from './highlights/highlights.component';

const dependencies = [
  core
];

const mod =
  angular
    .module('app.ui', dependencies)
    .component('header', header)
    .component('highlights', highlights);

export default mod.name;
