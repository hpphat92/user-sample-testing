export default ['$scope', '$state', ($scope, $state) => {
    $scope.logout = function () {
        $state.go('pages.signin');
    }
}];