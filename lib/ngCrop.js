(function(module) {
  'use strict';

  var ngCrop = function($q, ngDialog) {

    var show = function() {
      var deferred = $q.defer();

      ngDialog.openConfirm({
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
    $scope.state = 'upload';
    $scope.cropping = false;

    $scope.workingImage = null;

    /*
     * Finishes the crop, gets the Base64 img and returns it.
     */
    $scope.cropAndClose = function() {
      $scope.cropping = true;

      $scope.confirm('Success!');
    };

    $scope.fileDropped = function($files) {
      if (!$files.length) return;

      var file = $files[0];
      var fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = function(event) {
        $scope.workingImage = event.target.result;
        $scope.state = 'cropping';
        $scope.$apply();
      };
    };
  };

  module.factory('ngCrop', ngCrop)
    .controller('ngCropCtrl', ngCropCtrl);

}(angular.module('ngCrop', [
  'ngDialog',
  'angularFileUpload'
])));
