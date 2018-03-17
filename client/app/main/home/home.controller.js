export default ['$scope', '$state', 'authService', ($scope, $state, authService) => {
    $scope.logout = function () {
        authService.logout();
        $state.go('pages.signin');
    }
}];