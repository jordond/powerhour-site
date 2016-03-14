/**
 * Main view for the GitHub activity tracker
 */
import './activity.scss';
import templateUrl from './activity.tpl.html';

/* @ngInject */
function controller(githubApi) {
  githubApi
      .getActivity(this.user, this.repo, this.limit || 3, this.enableCommitStatus)
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
