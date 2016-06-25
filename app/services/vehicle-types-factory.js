(function () {
  'use strict';

  angular
    .module('car-collection')
    .factory('VehicleTypes', VehicleTypesFactory);

  VehicleTypesFactory.$inject = ['$resource'];

  function VehicleTypesFactory($resource) {
    return $resource('http://localhost:64301/vehicle-types/:id', {}, {
      edit: {
        method: 'PUT'
      }
    });
  }
})();
