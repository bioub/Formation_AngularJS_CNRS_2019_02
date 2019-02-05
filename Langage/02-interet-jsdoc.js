/**
 * Ma fonction Bonjour
 * @param {string} name La personne à saluer
 * @returns {string} Le message Bonjour
 */
function hello(name) {
  return 'Bonjour ' + name.toLocaleLowerCase();
}

hello('Romain');

/**
 *
 * @param {import('angular-ui-router').IStateProvider} $stateProvider
 */
function Config($stateProvider) {
  $stateProvider.state('location', {
    url: '/location',
    controller: LocationController,
  })
}
