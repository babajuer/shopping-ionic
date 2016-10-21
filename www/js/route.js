/**
 * 总路由模块
 */

angular.module('route', [
  'tab.route',
  'guidePage.route',
  'home.route',
  'category.route',
  'goodsList.route',
  'details.route',
  'cart.route',
  'account.route'
])
  .config(function($stateProvider, $urlRouterProvider) {

    if(localStorage["isFirst"])
    {
      $urlRouterProvider.otherwise('/tab/home');
    }
    else {
      $urlRouterProvider.otherwise('/guidePage');
    }


  });
