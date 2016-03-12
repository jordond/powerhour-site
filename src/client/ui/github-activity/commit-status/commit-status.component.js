import './commit-status.scss';

/* eslint indent: 0 */
const template = [
  '<span class="commit-status" ng-show="$ctrl.status">',
    '<i class="commit-status-icon fa {{$ctrl.status.state}}" ',
        'ng-class="$ctrl.getIcon($ctrl.status.state)">',
    '</i>',
    '<span class="commit-status-popover above">',
      '{{$ctrl.status.description}}',
    '</span>',
  '</span>'
].join('');

function controller() {
  const iconMap = {
    success: 'fa-check',
    pending: 'fa-cog fa-spin',
    error: 'fa-times'
  };

  this.getIcon = (state) => iconMap[state];
}

const component = {
  bindings: {
    status: '='
  },
  controller,
  template
};

export default component;
