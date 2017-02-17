/**
 * Container component that displays each divided part from
 * UI components.
 */
import './main.scss';

/* eslint indent: 0 */
const template = [
    '<header class="section"></header>',
    '<highlights class="section"></highlights>',
    '<feature-list></feature-list>',
    '<github-activity class="section" ',
      'user="jordond" ',
      'repo="powerhour" ',
      'limit="4" ',
      'enable-commit-status="true">',
    // '</github-activity>',
    '<footer></footer>'
].join('');

const mainComponent = {
  bindings: {},
  template
};

export default mainComponent;
