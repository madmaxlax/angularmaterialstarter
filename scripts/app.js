/// <reference path="C:\Apps\Dropbox\Dev\typings\angularjs\angular.d.ts" />

//quick enhancement to add the length to objects, not just arrays
// Object.prototype._length = function () {
//   return Object.keys(this).length;
// };

(function () {
    var app = angular.module('myapp', ['ngResource', 'ngMaterial']);
    angular.module('myapp').config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
          //choose colors at https://material.angularjs.org/1.1.4/demo/colors
          .primaryPalette('yellow')
          .accentPalette('deep-orange');
      });
    angular.module('myapp').controller('appController', ['$scope', '$http', '$resource', '$filter', '$mdSidenav', '$mdDialog', '$mdToast', function ($scope, $http, $resource, $filter, $mdSidenav, $mdDialog, $mdToast) 
    {
        $scope.toggleLeft = function () {
            $mdSidenav('left').toggle();
        };
    }]);
})();
