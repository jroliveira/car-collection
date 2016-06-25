(function () {
  'use strict';

  angular
    .module('car-collection')
    .factory('Vehicle', VehicleFactory);

  VehicleFactory.$inject = ['$resource'];

  function VehicleFactory($resource) {
    return $resource('http://localhost:64301/vehicles/:id', {}, {
      edit: {
        method: 'PUT'
      }
    });
  }
})();
