(function () {
  'use strict';

  angular
    .module('car-collection', [
      'ngMaterial',
      'ngRoute',
      'ngResource',
      'ngMessages',
      'validation.match',
      'flash'
    ])
    .config(config);

  config.$inject = ['$routeProvider'];

  function config($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home/index.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .when('/veiculos', {
        templateUrl: 'partials/vehicle/index.html',
        controller: 'ListVehicleController',
        controllerAs: 'vm'
      })
      .when('/veiculo/criar', {
        templateUrl: 'partials/vehicle/create.html',
        controller: 'CreateVehicleController',
        controllerAs: 'vm'
      })
      .when('/veiculo/editar/:id', {
        templateUrl: 'partials/vehicle/edit.html',
        controller: 'EditVehicleController',
        controllerAs: 'vm'
      })
      .when('/fabricantes', {
        templateUrl: 'partials/manufacturer/index.html',
        controller: 'ListManufacturerController',
        controllerAs: 'vm'
      })
      .when('/fabricante/criar', {
        templateUrl: 'partials/manufacturer/create.html',
        controller: 'CreateManufacturerController',
        controllerAs: 'vm'
      })
      .when('/fabricante/editar/:id', {
        templateUrl: 'partials/manufacturer/edit.html',
        controller: 'EditManufacturerController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
})();
