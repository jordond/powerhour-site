import './status-badge.scss';

/* eslint indent: 0 */
const template = [
  '<a class="status-badge" about="_blank" ',
    'href="https://ci.hoogit.ca/job/PowerHour.{{$ctrl.branch}}/">',
    '<img ng-src="https://ci.hoogit.ca/buildStatus/icon?job=PowerHour.{{$ctrl.branch}}" />',
  '</a>'
].join('');

const component = {
  bindings: {
    branch: '@'
  },
  template
};

export default component;
