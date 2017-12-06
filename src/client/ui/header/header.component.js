import './header.scss';

import { shuffle, requireAll } from '../../util/helpers';

const context = require.context('./screens', true, /^\.\/.*\.png$/);
const screenshots = requireAll(context);

const content = {
  title: 'Power Hour for Android',
  description: 'An easy way to keep track during everyone\'s favourite drinking game! ',
  actions: [{
      name: 'Play Store',
      link: 'https://play.google.com/store/apps/details?id=ca.hoogit.powerhour',
      icon: 'fa-android',
      class: 'button-primary'
    }, {
      name: 'View Source',
      link: 'http://github.com/jordond/powerhour',
      icon: 'fa-github',
      class: 'button-alt',
    }
  ]
};

/* eslint indent: 0 */
const template = [
  '<div class="container">',
    '<div class="row">',
      '<div class="one-half column header-left">',
        '<h3 class="header-heading">{{$ctrl.content.title}}</h3>',
        '<h4 class="header-subheading">{{$ctrl.content.description}}</h4>',
        '<div class="action-buttons" ng-repeat="action in $ctrl.content.actions">',
          '<a href="{{action.link}}" class="button" ng-class="action.class" target="_blank">',
            '<i class="fa {{action.icon}}"></i> {{action.name}}',
          '</a>',
        '</div>',
      '</div>',
      '<div class="one-half column header-right phones">',
        '<img class="phone" ng-repeat="screen in $ctrl.content.screenshots track by $index" ng-src="{{screen}}">',
      '</div>',
    '</div>',
  '</div>'
].join('');

function controller() {
  this.content = content;
  this.content.screenshots = shuffle(screenshots).slice(0, 2);
}

const header = {
  bindings: {},
  controller,
  template
};

export default header;
