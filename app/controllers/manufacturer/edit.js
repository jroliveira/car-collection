(function () {
  'use strict';

  angular
    .module('car-collection')
    .controller('EditManufacturerController', EditController);

  EditController.$inject = ['Manufacturer', '$location', '$routeParams', 'flash'];

  function EditController(Manufacturer, $location, $routeParams, flash) {
    var vm = this;
    vm.manufacturer = Manufacturer.get({
      id: $routeParams.id
    });
    vm.edit = edit;

    function edit() {
      Manufacturer
        .edit(vm.manufacturer)
        .$promise
        .then(success, error);

      function success() {
        $location.path('/fabricantes');
        flash('Fabricante salva com sucesso!');
      }

      function error() {
        flash('error', 'Erro ao atualizar a fabricante!');
      }
    }
  }
})();
