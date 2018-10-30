angular.module('app.controllers', [])

.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  $scope.mdl = {};

  $scope.resetButton = function (){
    $scope.mdl.intxt1 = "";
    $scope.mdl.radio5="1";
    $scope.mdl.range1="1";

  };


}])

.controller('page2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  $scope.intxt1=$stateParams.intxt1;
  $scope.range1=$stateParams.range1;
  $scope.radio5=$stateParams.radio5;
  //$scope.name of the param=$stateParams.same name

}])
