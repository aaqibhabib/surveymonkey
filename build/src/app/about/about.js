angular.module( 'app.about', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(["$stateProvider", function config( $stateProvider ) {
  $stateProvider.state( 'about', {
    url: '/about',
    views: {
      "main": {
        controller: 'AboutCtrl',
        templateUrl: 'about/about.tpl.html'
      }
    },
    data:{ pageTitle: 'Another Survey Monkey Page' }
  });
}])

.controller( 'AboutCtrl', ["$scope", function AboutCtrl( $scope ) {
    // Nothing to show
}])

;
