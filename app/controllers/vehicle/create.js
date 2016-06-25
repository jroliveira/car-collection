(function() {
  'use strict';

  angular
    .module('car-collection')
    .controller('CreateVehicleController', CreateController);

  CreateController.$inject = ['Vehicle', 'VehicleTypes', 'Manufacturer', '$location', 'flash'];

  function CreateController(Vehicle, VehicleTypes, Manufacturer, $location, flash) {
    var vm = this;
    vm.vehicle = {
      model: '',
      note: '',
      manufacturers: Manufacturer.query(),
      types: VehicleTypes.query()
    };
    vm.save = save;

    function save() {
      Vehicle
        .save(vm.vehicle)
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
