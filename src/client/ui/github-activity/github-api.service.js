import angular from 'angular';

const apiHost = 'https://api.github.com';
const eventLimit = 2;

class GithubAPI {

  /* @ngInject */
  constructor($http) {
    this.$http = $http;
  }

  /**
   * Hit the Github api for the repositories latest events.
   * If enableCommitStatus is true then make additional Github requests
   * for the status of the first commit.
   *
   * If no #repository is passed in then api.github.com/users/:user/events will be hit,
   * which will get all events by that user.  Even for :repo, /events is chosen as it lists
   * several commits per event.
   *
   * NOTE: If a repository is big enough and gets more Watch/Star events then there might
   * not be any PushEvents for this to catch. TODO maybe switch to /commits?
   *
   * TODO: Refactor to accept the repo as {':user/:repo'}
   *
   * @param string  user               Github username
   * @param string  repository         The repository to check
   * @param boolean enableCommitStatus Enable the checking of statuses for the commit
   */
  getActivity(user, repository, limit, enableCommitStatus) {
    if (!user || user === angular.isUndefined()) {
      return Promise.reject('No user was supplied');
    }

    // Decided which url to use based on passed in parameters
    let urlArray = [apiHost];
    if (repository) {
      urlArray = urlArray.concat(['repos', user, repository]);
    } else {
      urlArray = urlArray.concat(['users', user]);
    }
    urlArray.push('events');

    return this.$http.get(urlArray.join('/'))
      .then((response) => this.handleResponse(response, limit, enableCommitStatus))
      .catch((error) => {
        console.error('XHR Failed for getActivity.\n', angular.toJson(error.data, true));
      });
  }

  /**
   * Handle the response from the Github api.
   * Filter through the commits and find ones that are PushEvents and have
   * distinct commits.  If #enableCommitStatus is true, then check the status
   * of the commit.
   *
   * @param object  response           The {@link $http} response object
   * @param number  limit              The maximum number of events to store
   * @param boolean enableCommitStatus Check the status of the event's commit
   */
  handleResponse(response, limit, enableCommitStatus) {
    const maxEvents = limit || eventLimit;
    const events = [];

    for (const event of response.data) {
      if (events.length < maxEvents) {
        if (event.type === 'PushEvent' && event.payload.distinct_size > 0) {
          if (enableCommitStatus) {
            this.getStatus(event);
          }
          events.push(event);
        }
      } else {
        return events;
      }
    }
    return events;
  }

  /**
   * Hit the Github commit api to check the status of a commit.
   * Status is set by your automated build services (Travis, drone, jenkins, etc.)
   *
   * @param object  event The push event containing the commits
   */
  getStatus(event) {
    // Get the SHA of the first commit in the event
    const sha = event.payload.commits[event.payload.commits.length - 1].sha;
    const url = 'https://api.github.com/repos/' + event.repo.name + '/commits/' + sha + '/statuses';

    // Get the first status from the result
    return this.$http.get(url)
      .then((response) => {
        event.status = response.data[0] || {};
        return event;
      })
      .catch((error) => {
        console.error('XHR Failed for getStatus.\n', angular.toJson(error.data, true));
      });
  }
}

export default GithubAPI;
