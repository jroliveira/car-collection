(function () {
  'use strict';

  angular
    .module('car-collection')
    .directive('butterbar', ButterBar);

  ButterBar.$inject = ['$rootScope'];

  function ButterBar($rootScope) {
    return {
      link: function (scope, element, attrs) {
        element.addClass('hide');

        $rootScope.$on('$routeChangeStart', function () {
          element.removeClass('hide');
        });

        $rootScope.$on('$routeChangeSuccess', function () {
          element.addClass('hide');
        });
      }
    };
  }
})();
