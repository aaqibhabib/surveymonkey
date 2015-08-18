angular.module('app.home', [
  'ui.router'
])

.config(["$stateProvider", function config($stateProvider) {
  $stateProvider.state('home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data: {
      pageTitle: 'Composer'
    }
  });
}])

.controller('HomeCtrl', ["$scope", "$modal", function HomeController($scope, $modal) {
  $scope.surveyTitle = 'My survey!';
  $scope.widgets = [{
    type: 'radio',
    question: 'Did you enjoy your dining experience?',
    options: 'Yes, No, Not Sure'
  }, {
    type: 'checkbox',
    question: 'What did you order? (Check all that apply)',
    options: 'Soup, Salad, Entree, Dessert'
  }, {
    type: 'radio',
    question: 'Would you recommend this resturant?',
    options: 'Yes, No, Not Sure'
  }];


  $scope.remove = function(index) {
    $scope.widgets.splice(index, 1);
  };

  $scope.preview = function() {
    var modalInstance = $modal.open({
      templateUrl: 'home/modal/preview.tpl.html',
      controller: 'PreviewModalInstanceCtrl',
      size: 'lg',
      resolve: {
        data: function() {
          return {
            widgets: $scope.widgets,
            title: $scope.surveyTitle
          };
        }
      }
    });
  };

  $scope.addRadio = function() {
    $scope.widgets.push({
      type: 'radio',
      quesion: '',
      options: ''
    });
  };

  $scope.addCheckbox = function() {
    $scope.widgets.push({
      type: 'checkbox',
      quesion: '',
      options: ''
    });
  };

}]);
