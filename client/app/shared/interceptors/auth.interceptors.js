import appConstant from '../../app.constant';

export default ['$q', function ($q) {
    return {
        request: function (config) {
            config.headers['X-DreamFactory-Api-Key'] = appConstant.apiKey;
            if(config.anonymous){

            }
            return config;
        },
        response: function (response) {
            return response;
        },
        responseError: function (rejection) {
            return $q.reject(rejection);
        }
    };
}]