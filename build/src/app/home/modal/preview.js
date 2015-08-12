angular.module('app.home').controller('PreviewModalInstanceCtrl', ["$scope", "$modalInstance", "data", function ($scope, $modalInstance, data) {

  $scope.widgets = data.widgets;
  $scope.surveyTitle = data.title;

  $scope.splitOptions = function(options) {
    return options.split(',');
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  // can do more checking.
  // check for empty/single options, maybe display message
  $scope.isShowWorthy = function (widget) {
    if (widget.question && widget.options) {
      return true;
    } else {
      return false;
    }
  };
}]);
