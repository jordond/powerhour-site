import angular from 'angular';

import core from '../core/core.module';

import header from './header/header.component';
import phone from './phone/phone.component';

const dependencies = [
  core
];

const mod =
  angular
    .module('app.ui', dependencies)
    .component('header', header)
    .component('phone', phone);

export default mod.name;
