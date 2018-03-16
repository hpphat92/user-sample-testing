import 'bootstrap-css-only';

import 'normalize.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import appComponent from './app.component';
import mainModule from './main';
import templatePage from './main/pages/pages.html';
import templateSignin from './main/pages/signin/signin.html';
import templateRegister from './main/pages/register/register.html';
import authService from './shared/services/auth.service';
import authInterception from './shared/interceptions/auth.interception';

var appModule = angular.module('app', [
    mainModule.name,
    uiRouter
])
    .service('authService', authService)
    .factory('AuthInterception', authInterception);
appModule.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', ($stateProvider, $urlRouterProvider, $httpProvider) => {
    $httpProvider.interceptors.push('AuthInterception');
    $urlRouterProvider.otherwise('/pages/signin');
    $stateProvider.state('pages', {
        abstract: true,
        url: '/pages',
        template: templatePage,
        controller: 'pagesController'
    });
    $stateProvider.state('pages.signin', {
        url: '/signin',
        template: templateSignin,
        controller: 'signinController'
    });
    $stateProvider.state('pages.register', {
        url: '/register',
        template: templateRegister,
        controller: 'registerController'
    });
}]);

appModule.run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    });
    $rootScope.$on('stateChangeSuccess', function (event, toState, toParams, fromState, fromParams, error) {
    });
}]);