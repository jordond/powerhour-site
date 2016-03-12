import angular from 'angular';

const apiHost = 'https://api.github.com';
const eventLimit = 2;

class GithubAPI {

  /* @ngInject */
  constructor($http) {
    this.$http = $http;
  }

  getActivity(user, repository, limit) {
    if (!user || user === angular.isUndefined()) {
      return Promise.reject('No user was supplied');
    }

    let urlArray = [apiHost];
    if (repository) {
      urlArray = urlArray.concat(['repos', user, repository]);
    } else {
      urlArray = urlArray.concat(['users', user]);
    }
    urlArray.push('events');
    return this.$http.get(urlArray.join('/'))
      .then((response) => this.handleResponse(response, limit))
      .catch((error) => {
        console.error('XHR Failed for getActivity.\n', angular.toJson(error.data, true));
      });
  }

  handleResponse(response, limit) {
    const maxEvents = limit || eventLimit;
    const events = [];

    for (const event of response.data) {
      if (events.length < maxEvents) {
        if (event.type === 'PushEvent') {
          this.getStatus(event);
          events.push(event);
        }
      } else {
        return events;
      }
    }
    return events;
  }

  getStatus(event) {
    const sha = event.payload.commits[event.payload.commits.length - 1].sha;
    const url = 'https://api.github.com/repos/' + event.repo.name + '/commits/' + sha + '/statuses';

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
