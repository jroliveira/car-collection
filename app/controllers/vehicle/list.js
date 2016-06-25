(function () {
  'use strict';

  angular
    .module('car-collection')
    .controller('ListVehicleController', ListController);

  ListController.$inject = ['Vehicle', 'flash'];

  function ListController(Vehicle, flash) {
    var vm = this;
    vm.vehicles = Vehicle.query();
    vm.delete = destroy;

    function destroy(vehicle) {
      Vehicle
        .delete({
          id: vehicle.id
        })
        .$promise
        .then(success, error);

      function success() {
        vm.vehicles = Vehicle.query();
        flash('Veiculo deletada com sucesso!');
      }

      function error() {
        flash('error', 'Erro ao deletar a veiculo!');
      }
    }
  }
})();
