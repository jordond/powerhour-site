import angular from 'angular';

import core from '../core/core.module';
import header from './header/header.component';

const dependencies = [
  core
];

const mod =
  angular
    .module('app.ui', dependencies)
    .component('header', header);

export default mod.name;
