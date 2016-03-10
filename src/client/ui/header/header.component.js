import './header.scss';

const content = {
  title: 'Pour Hour for Android',
  description: 'An easy way to keep track during everyone\'s favourite drinking game! ',
  screenshots: [
    'images/screen_main_framed.png',
    'images/screen_game_active_shot_framed.png'
  ],
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
  '<div class="header">',
    '<div class="container">',
      '<div class="row">',
        '<div class="one-half column header-left">',
          '<h3 class="header-heading">{{$ctrl.content.title}}</h3>',
          '<h4 class="header-heading">{{$ctrl.content.description}}</h4>',
          '<div class="action-buttons" ng-repeat="action in $ctrl.content.actions">',
            '<a href="{{action.link}}" class="button" ng-class="action.class">',
              '<i class="fa {{action.icon}}"></i> {{action.name}}',
            '</a>',
          '</div>',
        '</div>',
        '<div class="one-half column header-right phones">',
          '<phone ng-repeat="screen in $ctrl.content.screenshots" image="screen"></phone>',
        '</div>',
      '</div>',
    '</div>',
  '</div>',
].join('');

function controller() {
  this.content = content;
}

const header = {
  bindings: {},
  controller,
  template
};

export default header;
