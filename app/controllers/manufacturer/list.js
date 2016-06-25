(function () {
  'use strict';

  angular
    .module('car-collection')
    .controller('ListManufacturerController', ListController);

  ListController.$inject = ['Manufacturer', 'flash'];

  function ListController(Manufacturer, flash) {
    var vm = this;
    vm.manufacturers = Manufacturer.query();
    vm.delete = destroy;

    function destroy(manufacturer) {
      Manufacturer
        .delete({
          id: manufacturer.id
        })
        .$promise
        .then(success, error);

      function success() {
        vm.manufacturers = Manufacturer.query();
        flash('Fabricante deletada com sucesso!');
      }

      function error() {
        flash('error', 'Erro ao deletar a fabricante!');
      }
    }
  }
})();
