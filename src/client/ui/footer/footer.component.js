import './footer.scss';

const content = {
  items: [
    {
      url: 'https://hoogit.ca',
      icon: 'home',
      popover: 'HoogIT'
    },
    {
      url: 'https://play.google.com/store/apps/details?id=ca.hoogit.powerhour',
      icon: 'android',
      popover: 'Play Store'
    },
    {
      url: 'mailto:contact@powerhourapp.ca',
      icon: 'envelope',
      popover: 'Contact'
    },
    {
      url: 'https://github.com/jordond/powerhour',
      icon: 'github',
      popover: 'App Source'
    },
    {
      url: 'https://github.com/jordond/powerhour-site',
      icon: 'hashtag',
      popover: 'Site Source'
    }
  ],
  copyright: {
    text: '© HoogIT. Credits: Jordon de Hoog',
    poweredBy: ' + Powered by Angular & ES6',
    source: {
      text: 'Source',
      url: 'https://github.com/jordond/powerhour-site'
    }
  }
};

/* eslint indent: 0 */
const template = [
  '<div class="footer">',
    '<ul class="footer_icons">',
      '<li class="footer_icons_icon" ',
          'ng-repeat="item in $ctrl.content.items">',
        '<a class="icon" href="{{item.url}}" target="_blank">',
          '<i class="fa fa-fw fa-{{item.icon}}"></i>',
        '</a>',
        '<span class="ph-popover">{{item.popover}}</span>',
      '</li>',
    '</ul>',
    '<p class="copyright">',
      '{{$ctrl.content.copyright.text}}<br/>',
      '<a href="{{$ctrl.content.copyright.source.url}}">',
        '{{$ctrl.content.copyright.source.text}}',
      '</a>',
      '{{$ctrl.content.copyright.poweredBy}}',
      '<br /><a ui-sref="privacy">',
        'Privacy Policy',
      '</a>',
    '</p>',
  '</div>'
].join('');

const component = {
  bindings: {},
  template,
  controller: function ctrl() {
    this.content = content;
  }
};

export default component;
