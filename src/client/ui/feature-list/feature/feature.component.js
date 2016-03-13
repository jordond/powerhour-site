import './feature.scss';

/* eslint indent: 0 */
const template = [
  '<div class="row feature" ng-class="{reverse: $ctrl.reverse}">',
    '<div class="three columns feature_image">',
      '<img class="u-max-full-width" ng-src="{{$ctrl.info.image}}" alt="{{$ctrl.info.header}}">',
    '</div>',
    '<div class="eight columns feature_text">',
      '<h3 class="feature_text_header">',
        '{{$ctrl.info.header}}',
      '</h3>',
      '<p class="feature_text_description">',
        '{{$ctrl.info.description}}',
      '</p>',
    '</div>',
  '</div>'
].join('');

const component = {
  bindings: {
    info: '<',
    reverse: '='
  },
  template
};

export default component;
