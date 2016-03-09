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
    }
  ];
}

/** @ngInject */
export default function configureStates($stateProvider) {
  const states = getStates();
  states.forEach((state) => $stateProvider.state(state.state, state.config));
}
