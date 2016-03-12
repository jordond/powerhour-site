import './activity.scss';
import templateUrl from './activity.tpl.html';

/* @ngInject */
function controller(githubApi) {
  this.events = githubApi
      .getActivity(this.user, this.repo, this.limit || 3)
        .then((data) => (this.events = data))
        .catch((err) => {
          console.error('getEvents: ', err);
        });
}

const activityComponent = {
  bindings: {
    user: '<',
    limit: '<',
    repo: '<'
  },
  controller,
  templateUrl
};

export default activityComponent;
