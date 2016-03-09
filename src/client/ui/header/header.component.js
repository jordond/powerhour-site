import './header.scss';

const content = {
  title: 'Pour Hour for Android',
  description: 'An easy way to keep track during everyone\'s favourite drinking game! ' +
               'Choose a game mode, and get drinking (responsibly)!',
  screenshot: 'screen_main.png',
  actions: [{
      name: 'View Source',
      link: 'http://github.com/jordond/powerhour',
      class: 'fa fa-github'
    }, {
      name: 'Google Play',
      link: 'https://play.google.com/store/apps/details?id=ca.hoogit.powerhour',
      class: 'fa fa-android'
    }, {
      name: 'Learn More',
      link: '#one',
      class: 'fa fa-chevron-down'
    }
  ]
};

/* eslint indent: 0 */
const template = [
  '<div>',
    '<div class="content">',
      '<h1><a href="#">{{$ctrl.content.title}}</a></h1>',
      '<p>{{$ctrl.content.description}}</p>',
      '<ul class="actions">',
        '<li ng-repeat="action in $ctrl.content.actions">',
          '<a href="{{action.link}}" class="button" ng-class="action.class">',
            '{{action.name}}',
          '</a>',
        '</li>',
      '</ul>',
    '<div class="image phone">',
      '<div class="inner">',
        '<img ng-src="{{$ctrl.content.screenshot}}" alt="Screenshot" />',
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
