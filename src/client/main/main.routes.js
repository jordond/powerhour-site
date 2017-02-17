import privacy from '../privacy.html';

/**
 * Main and only route
 *
 * loads the Main.component
 */
function getStates() {
  return [
    {
      state: 'main',
      config: {
        name: 'main',
        url: '/',
        template: '<main></main>',
        data: {
          misc: 'Hello world'
        }
      }
    }, {
      state: 'privacy',
      config: {
        name: 'privacy',
        url: '/privacy',
        templateUrl: privacy
      }
    }
  ];
}

/** @ngInject */
export default function configureStates($stateProvider) {
  const states = getStates();
  states.forEach((state) => $stateProvider.state(state.state, state.config));
}
