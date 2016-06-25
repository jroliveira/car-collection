(function () {
  'use strict';

  angular
    .module('car-collection')
    .controller('CreateManufacturerController', CreateController);

  CreateController.$inject = ['Manufacturer', '$location', 'flash'];

  function CreateController(Manufacturer, $location, flash) {
    var vm = this;
    vm.manufacturer = {
      name: ''
    };
    vm.save = save;

    function save() {
      Manufacturer
        .save(vm.manufacturer)
        .$promise
        .then(success, error);

      function success() {
        $location.path('/fabricantes');
        flash('Fabricante salvo com sucesso!');
      }

      function error() {
        flash('error', 'Erro ao atualizar o fabricante!');
      }
    }
  }
})();
