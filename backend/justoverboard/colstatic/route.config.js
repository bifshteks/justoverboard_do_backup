import HomeController from './controllers/home/home.controller';
import CartController from './controllers/cart/cart.controller';

export default function routerConfig ($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider
    .state({
      url: '/',
      name: 'home',
      templateUrl: './controllers/home/home.view.html',
      controller: HomeController,
      controllerAs: 'controller'
    })
    .state( {
      url: '/cart',
      name: 'cart',
      templateUrl: './controllers/cart/cart.view.html',
      controller: CartController,
      controllerAs: 'controller'
    })
    
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
}

