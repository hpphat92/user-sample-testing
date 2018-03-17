export default ['$scope', 'authService', ($scope, authService) => {
    $scope.registerModel = {};

    $scope.register = () => {
        authService.register({
            "name": $scope.registerModel.name,
            "first_name": $scope.registerModel.firstName,
            "last_name": $scope.registerModel.lastName,
            "email": $scope.registerModel.email,
            "password": $scope.registerModel.password
        })
            .then((resp) => {

            }, (err) => {

            })
    }
}];

