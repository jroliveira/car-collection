(function () {
  'use strict';

  angular
    .module('car-collection')
    .factory('Manufacturer', ManufacturerFactory);

  ManufacturerFactory.$inject = ['$resource'];

  function ManufacturerFactory($resource) {
    return $resource('http://localhost:64301/manufacturers/:id', {}, {
      edit: {
        method: 'PUT'
      }
    });
  }
})();
