(function() {
  'use strict';

  angular
    .module('car-collection')
    .controller('EditVehicleController', EditController);

  EditController.$inject = ['Vehicle', 'VehicleTypes', 'Manufacturer', '$location', '$routeParams', 'flash'];

  function EditController(Vehicle, VehicleTypes, Manufacturer, $location, $routeParams, flash) {
    var vm = this;
    var condition = {
      id: $routeParams.id
    };
    Vehicle.get(condition)
      .$promise
      .then(function(vehicle) {
        vm.vehicle = vehicle;
        vm.vehicle.manufacturers = Manufacturer.query();
        vm.vehicle.types = VehicleTypes.query();
      });

    vm.edit = edit;

    function edit() {
      Vehicle
        .edit(vm.vehicle)
        .$promise
        .then(success, error);

      function success() {
        $location.path('/veiculos');
        flash('Veiculo salva com sucesso!');
      }

      function error() {
        flash('error', 'Erro ao atualizar a veiculo!');
      }
    }
  }
})();
