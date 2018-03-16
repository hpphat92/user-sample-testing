export default ['$scope', 'authService', ($scope, authService) => {
    $scope.registerModel = {};

    $scope.register = () => {
        authService.register($scope.registerModel)
    }
}];

