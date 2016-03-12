import angular from 'angular';

const apiHost = 'https://api.github.com';
const eventLimit = 2;

function handleResponse(response, limit) {
  const maxEvents = limit || eventLimit;
  const events = [];

  for (const event of response.data) {
    if (events.length < maxEvents) {
      if (event.type === 'PushEvent') {
        events.push(event);
      }
    } else {
      return events;
    }
  }
  return events;
}

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
      .then((response) => handleResponse(response, limit))
      .catch((error) => {
        console.error('XHR Failed for getActivity.\n', angular.toJson(error.data, true));
      });
  }

}

export default GithubAPI;
