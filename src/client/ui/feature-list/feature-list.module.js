import angular from 'angular';

import featureList from './feature-list.component';
import feature from './feature/feature.component';

const mod =
  angular
    .module('app.ui.featureList', [])
    .component('featureList', featureList)
    .component('feature', feature);

export default mod.name;
