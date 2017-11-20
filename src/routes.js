export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      component: 'app'
    })
    .state('app', {
      url: '/',
      parent: 'root',
      template: '<h1>Home Page</h1>'
    })
    .state('dashboard', {
      parent: 'root',
      url: '/dashboard',
      component: 'dashboard'
    })
    .state('news', {
      parent: 'root',
      url: '/news',
      template: '<h1>News Page</h1>'
    })
    .state('board-brief', {
      parent: 'root',
      url: '/board-brief',
      template: '<h1>Board Brief Page</h1>'
    })
    .state('briefcase', {
      parent: 'root',
      url: '/briefcase',
      template: '<h1>Briefcase Page</h1>'
    });
}
