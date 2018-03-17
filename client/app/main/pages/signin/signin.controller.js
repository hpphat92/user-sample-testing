export default ['$scope', 'authService','$state', ($scope, authService, $state) => {
    $scope.signinModel = {};

    $scope.login = () => {
        // authService.login($scope.signinModel)
        $state.go('home.user');
    }
}];

