import appConstant from '../../app.constant';

export default ['$http', 'userContext', function ($http, userContext) {
    this.login = function (model) {
        let token = btoa(`${model.email}:${model.password}`);
        return $http.get(`${appConstant.apiDomain}/api/v2/system/user`, {
            headers: {
                Authorization: `Basic ${token}`
            },
            anonymous: true
        }).then(({data}) => {
            userContext.userToken = token;
            userContext.userInfo = data.resource.find((o) => o.username === model.email);
        });

    };
    this.register = function (model) {
        return $http.post(`${appConstant.apiDomain}/api/v2/system/user`, {
            resource: [model]
        }, {
            anonymous: true
        });
    };
    this.getUserById = function (id) {
        return $http.post(`${appConstant.apiDomain}/api/v2/system/user?ids=${id}`, {
            resource: [model]
        });
    };
    this.getUserByEmail = function (email) {
        return $http.get(`${appConstant.apiDomain}/api/v2/system/user?filter=email%3D${email}`);
    };
    this.editUser = function (id, model) {
        return $http.patch(`${appConstant.apiDomain}/api/v2/system/user?ids=${id}`, {
            resource: [model]
        }, {
            showToaster: true
        });
    };
    this.logout = function () {
        userContext.userToken = '';
        userContext.userInfo = null;
    };
}]