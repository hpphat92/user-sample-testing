import 'bootstrap-css-only';

import 'normalize.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularLocalStorage from 'angular-local-storage';
import appComponent from './app.component';
import mainModule from './main';
import templatePage from './main/pages/pages.html';
import templateHome from './main/home/home.html';
import templateSignin from './main/pages/signin/signin.html';
import templateRegister from './main/pages/register/register.html';
import templateUser from './main/home/user/user.html';
import authService from './shared/services/auth.service';
import userContext from './shared/context/user.context';
import authInterception from './shared/interceptors/auth.interceptors';
import homeModule from "./main/home";

var appModule = angular.module('app', [
    mainModule.name,
    homeModule.name,
    uiRouter,
    angularLocalStorage
])
    .service('authService', authService)
    .factory('userContext', userContext)
    .factory('AuthInterception', authInterception);

appModule.config(['$stateProvider',
    '$urlRouterProvider',
    'localStorageServiceProvider',
    '$httpProvider',
    ($stateProvider,
     $urlRouterProvider,
     localStorageServiceProvider,
     $httpProvider) => {
        localStorageServiceProvider
            .setPrefix('userManagement');
        $httpProvider.interceptors.push('AuthInterception');
        $urlRouterProvider.otherwise('/pages/signin');
        $stateProvider
            .state('pages', {
                abstract: true,
                url: '/pages',
                template: templatePage,
                controller: 'pagesController'
            })
            .state('pages.signin', {
                url: '/signin',
                template: templateSignin,
                controller: 'signinController'
            })
            .state('pages.register', {
                url: '/register',
                template: templateRegister,
                controller: 'registerController'
            })
            .state('home', {
                abstract: true,
                url: '',
                template: templateHome,
                controller: 'homeController'
            })
            .state('home.user', {
                url: '/user',
                template: templateUser,
                controller: 'userController'
            })
    }]);

appModule.run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        console.error(error);
    });
    $rootScope.$on('stateChangeSuccess', function (event, toState, toParams, fromState, fromParams, error) {
    });
}]);