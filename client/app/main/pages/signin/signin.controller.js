export default ['$scope', 'authService', ($scope, authService) => {
    $scope.signinModel = {};

    $scope.login = () => {
        authService.login($scope.signinModel)
    }
}];

