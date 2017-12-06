/**
 * Main view for the GitHub activity tracker
 */
import './activity.scss';
import templateUrl from './activity.tpl.html';

/* @ngInject */
function controller(githubApi) {
  githubApi
      .getActivity(this.user || 'jordond', this.repo || 'powerhour', this.limit || 3, true)
        .then((data) => (this.events = data))
        .catch((err) => {
          console.error('getEvents: ', err);
        });
}

const activityComponent = {
  bindings: {
    user: '@',
    limit: '@',
    repo: '@',
    enableCommitStatus: '@'
  },
  controller,
  templateUrl
};

export default activityComponent;
