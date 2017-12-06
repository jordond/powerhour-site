import './highlights.scss';

const content = {
  about: 'The drinking game where you take a shot of beer every minute!',
  highlights: [
    {
      icon: 'eye',
      heading: 'Clean & Simple',
      description: 'A beautiful UI with bright and vibrant colors, designed for simplicity.'
    },
    {
      icon: 'cogs',
      heading: 'Customizable',
      description: 'Don\'t like one of the presets?  Customize practically every single aspect of your game!'
    },
    {
      icon: 'hashtag',
      link: 'http://github.com/jordond/powerhour',
      heading: 'Free & Open',
      description: 'Will always be 100% free, and the source is available on GitHub!'
    }
  ]
};

/* eslint indent: 0 */
const template = [
  '<div class="highlights">',
    '<div class="highlights-overlay"></div>',
    '<div class="container">',
      '<div class="row">',
        '<div class="twelve columns highlights-about">',
          '<h4>{{$ctrl.content.about}}</h4>',
        '</div>',
      '</div>',
      '<div class="row">',
        '<div class="one-third column highlight" ng-repeat="highlight in $ctrl.content.highlights">',
          '<h2 class="highlight-icon">',
            '<i class="fa fa-{{highlight.icon}}"></i>',
          '</h2>',
          '<h5 class="highlight-heading">{{highlight.heading}}</h5>',
          '<p class="highlight-description">{{highlight.description}}</p>',
        '</div>',
      '</div>',
    '</div>',
  '</div>'
].join('');

const hightlights = {
  bindings: {},
  template,
  controller: function ctrl() {
    this.content = content;
  }
};

export default hightlights;
