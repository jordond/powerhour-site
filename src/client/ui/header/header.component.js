import './header.scss';

import { shuffle } from '../../util/helpers';

const screenshots = [
  'images/screen_main_framed.png',
  'images/screen_configure_powerhour_framed.png',
  'images/screen_configure_colors_framed.png',
  'images/screen_game_active_shot_framed.png',
  'images/screen_game_active_round_1_framed.png',
  'images/screen_game_active_shot_framed.png',
  'images/screen_game_finish_complete_framed.png'
];

const content = {
  title: 'Pour Hour for Android',
  description: 'An easy way to keep track during everyone\'s favourite drinking game! ',
  actions: [{
      name: 'Google Play',
      link: 'https://play.google.com/store/apps/details?id=ca.hoogit.powerhour',
      icon: 'fa-android',
      class: 'button-primary'
    }, {
      name: 'View Source',
      link: 'http://github.com/jordond/powerhour',
      icon: 'fa-github',
      class: '',
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
          '<a href="{{action.link}}" class="button" ng-class="action.class">',
            '<i class="fa {{action.icon}}"></i> {{action.name}}',
          '</a>',
        '</div>',
      '</div>',
      '<div class="one-half column header-right phones">',
        '<img class="phone" ng-repeat="screen in $ctrl.content.screenshots" ng-src="{{screen}}">',
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
