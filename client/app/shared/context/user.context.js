export default ['localStorageService', function (localStorageService) {
    var userToken = '';

    function loadUserToken() {
        if (!userToken) {
            userToken = localStorageService.get('userToken');
        }
    }

    return {
        set userToken(token) {
            userToken = token;
            localStorageService.set('userToken', token);
        },
        get userToken() {
            loadUserToken();
            return userToken;
        }
    }
}]