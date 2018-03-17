export default ['$scope', 'authService', 'userContext', 'userInfo', ($scope, authService, userContext, userInfo) => {
    // var userInfo = userContext.userInfo;
    $scope.userModel = {
        firstName: userInfo.first_name,
        lastName: userInfo.last_name,
        email: userInfo.email,
        name: userInfo.name,
    };
    $scope.saveInfo = function () {
        authService.editUser(userInfo.id, {
            first_name: $scope.userModel.firstName,
            last_name: $scope.userModel.lastName,
            email: $scope.userModel.email,
            name: $scope.userModel.name,
        }).then(()=>{
            $scope.userForm.$setPristine();
        });
    }
}];

