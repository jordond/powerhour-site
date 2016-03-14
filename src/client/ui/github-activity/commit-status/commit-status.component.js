import './commit-status.scss';

/* eslint indent: 0 */
const template = [
  '<span class="commit-status" ng-show="$ctrl.status.state">',
    '<span class="commit-status-icon" ng-if="$ctrl.useText" ng-class="$ctrl.status.state">',
      '{{$ctrl.status.state}}',
    '</span>',
    '<i class="commit-status-icon fa" ng-if="!$ctrl.useText" ',
        'ng-class="$ctrl.getIcon($ctrl.status.state)">',
    '</i>',
    '<span class="ph-popover">',
      '{{$ctrl.status.description}}',
    '</span>',
  '</span>'
].join('');

function controller() {
  const iconMap = {
    success: 'fa-check success',
    pending: 'fa-cog fa-spin pending',
    error: 'fa-times error'
  };

  this.getIcon = (state) => iconMap[state];
}

const component = {
  bindings: {
    status: '=',
    useText: '@'
  },
  controller,
  template
};

export default component;
