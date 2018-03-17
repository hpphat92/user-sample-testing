import appConstant from '../../app.constant';

export default ['$http', 'userContext', function ($http, userContext) {
    this.login = function (model) {
        return $http.post(`${appConstant.apiDomain}/api/v2/system/user`, null, {
            header: {
                Authorization: btoa(`${model.email}:${model.password}`)
            },
            anonymous: true
        }).then((resp) => {
            debugger;
        });
    };
    this.register = function (model) {
        return $http.post(`${appConstant.apiDomain}/api/v2/system/user`, {
            resource: model
        }, {
            anonymous: true
        });
    };
    this.getUserById = function (id) {
        return $http.post(`${appConstant.apiDomain}/api/v2/system/user?ids=${id}`, {
            resource: model
        });
    };
    this.editUser = function (id, model) {
        return $http.patch(`${appConstant.apiDomain}/api/v2/system/user?ids=${id}`, {
            resource: model
        });
    };
    this.isAuthentication = function () {
        return !!userContext.userToken;
    };
}]