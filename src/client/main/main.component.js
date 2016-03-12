import './main.scss';

/* eslint indent: 0 */
const template = [
  '<div>',
    '<header class="section"></header>',
    '<highlights class="section"></highlights>',
    '<github-activity class="section" ',
      'user="jordond" ',
      'repo="powerhour" ',
      'limit="4" ',
      'enable-commit-status="true">',
    '</github-activity>',
  '</div>'
].join('');

const mainComponent = {
  bindings: {},
  template
};

export default mainComponent;
