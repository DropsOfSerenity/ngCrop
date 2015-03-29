(function(module) {
  'use strict';

  var ngCrop = function($q, ngDialog) {

    var show = function() {
      var deferred = $q.defer();

      var dialog = ngDialog.openConfirm({
        template: 'cropModal.html',
        controller: 'ngCropCtrl',
        closeByDocument: true,
        overlay: true
      }).then(function(value) {
        deferred.resolve(value);
      }, function(reason) {
        deferred.reject(reason);
      });

      return deferred.promise;
    };

    // Public API
    return {
      show: show
    };
  };

  var ngCropCtrl = function($scope) {
    /*
     * Finishes the crop, gets the Base64 img and returns it.
     */
    $scope.cropAndClose = function() {
      $scope.confirm('Success!');
    };
  };

  module.factory('ngCrop', ngCrop)
    .controller('ngCropCtrl', ngCropCtrl);

}(angular.module('ngCrop', [
 'ngDialog'
])));
