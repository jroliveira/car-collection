(function() {
  'use strict';

  angular
    .module('car-collection')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['Vehicle'];

  function HomeController(Vehicle) {
    var vm = this;
    vm.vehicles = Vehicle.query();
  }
})();
