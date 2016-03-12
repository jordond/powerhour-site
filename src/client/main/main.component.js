import './main.scss';

const github = {
  user: 'jordond',
  repo: 'powerhour',
  limit: 4
};

/* eslint indent: 0 */
const template = [
  '<div>',
    '<header class="section"></header>',
    '<highlights class="section"></highlights>',
    '<github-activity ',
      'user="$ctrl.github.user"',
      'repo="$ctrl.github.repo"',
      'limit="$ctrl.github.limit">',
    '</github-activity>',
  '</div>'
].join('');

const mainComponent = {
  bindings: {},
  template,
  controller: function ctrl() {
    this.github = github;
  }
};

export default mainComponent;
