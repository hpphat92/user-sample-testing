import appConstant from '../../app.constant';

export default ['$q', 'toaster', function ($q, toaster) {
    return {
        request: function (config) {
            config.headers['X-DreamFactory-Api-Key'] = appConstant.apiKey;
            if (!config.anonymous) {
                config.headers['Authorization'] = `Basic amRvZUBleGFtcGxlLmNvbTpzZWNyZXQ=`;
            }
            return config;
        },
        response: function (response) {
            if (response.status < 400 && !response.config.url.endsWith('html')) {
                if (response.config.showToaster) {
                    toaster.pop({
                        type: 'success',
                        body: 'Success'
                    })
                }
            }
            return response;
        },
        responseError: function (rejection) {
            var {data: {error: {message}}} = rejection;
            toaster.pop('error', 'Error', message);
            return $q.reject(rejection);
        }
    };
}]