export default ['localStorageService', function (localStorageService) {
    var userToken = '';
    var userInfo = null;

    function loadUserToken() {
        if (!userToken) {
            userToken = localStorageService.get('userToken');
        }
    }

    function loadUserInfo() {
        if (!userInfo) {
            userInfo = localStorageService.get('userInfo');
        }
    }

    return {
        set userToken(token) {
            userToken = token;
            if (!token) {
                localStorageService.remove('userToken');
            } else {
                localStorageService.set('userToken', token);
            }
        },
        get userToken() {
            loadUserToken();
            return userToken;
        },
        set userInfo(info) {
            userInfo = info;
            if (!info) {
                localStorageService.remove('userInfo');
            } else {
                localStorageService.set('userInfo', userInfo);
            }
        },
        get userInfo() {
            loadUserInfo();
            return userInfo;
        }
    }
}]